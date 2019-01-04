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
          this.getItem(this.id);
        }
      }
    );
  }

  getItem(id:number) {
    this.item  = this.itemsService.get(id);
  }

}
