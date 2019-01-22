import { Component, OnInit } from '@angular/core';
import { PageRoute } from 'nativescript-angular/router';
import { switchMap } from "rxjs/operators";
import { ItemsService } from '../_services/items.service';
import { ItemModel } from '../_models/item.model';

@Component({
  selector: 'ns-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css'],
  moduleId: module.id,
})
export class ItemEditComponent implements OnInit {

  item: ItemModel;

  id: number;

  readyView: Boolean = false;
  hasFetched: Boolean  = false;
  hasNoItem: Boolean = false;
  isProcessing: Boolean = false;

  constructor(
    private pageRoute: PageRoute,
    private itemsService: ItemsService,
  ) { }

  ngOnInit() {
    this.resolveRoute();
  }

  resolveRoute() {
    this.pageRoute.activatedRoute.pipe(
      switchMap(activatedRoute => activatedRoute.params)
    ).forEach(
      (params) => { 
        if(params["id"]) {
          this.id = +params["id"]; 
          this.getItem();
        }
      }
    );
  }

  delete() {
    if (this.item && !this.isProcessing) {
      this.isProcessing  = true;
      this.itemsService.delete(this.item.id).subscribe(
        (status) => {
          console.log("navigate back to list");
        }
      );
    }
  }

  private setItem(item: ItemModel) {
    this.item  = item;
    console.log(this.item);
  }

  private getItem() {
    console.log('*** getItem()');
    const item  = this.itemsService.get(this.id);
    if (item) {
      this.setItem(item);
    } else {
      if (!this.hasFetched) {
        console.log('-- cannot find in local store, trying remote store');
        this.fetchItem();
      } else {
        console.log('-- cannot find in local store and remote store and again in local store!!!!');
        this.handleItemNotFound();
      }
    }
  }

  private handleItemNotFound() {
    this.readyView  = true;
    this.hasNoItem  = true;
    console.log('***** I GIVE UP');
  }

  private fetchItem() {
    this.hasFetched  = true;
    this.itemsService.fetchItem(this.id).subscribe(
      (result) => {
        if (result) {
          this.setItem(result);
        } else {
          console.log('-- cannot find in local store and remote store, trying again in local store');
          this.getItem();
        }
      }
    );
  }

}
