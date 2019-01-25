import { Component, OnInit } from '@angular/core';
import { ItemModel } from './_models/item.model';
import { BehaviorSubject } from 'rxjs';
import { ItemsService } from './_services/items.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";


@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  moduleId: module.id,
})
export class ItemsComponent implements OnInit {

  items$: BehaviorSubject<ItemModel[]>;

  isProcessing: Boolean = false;

  constructor(
    private itemsService: ItemsService,
    private routerExtensions: RouterExtensions,
  ) { }

  ngOnInit() {
    this.items$  = this.itemsService.items$;
  }

  refresh() {
    this.isProcessing  = true;
    this.itemsService.fetch().subscribe(
      (result) => {
        this.isProcessing  = false;
      }
    );
  }

  hasItems(items: ItemModel[]): boolean {
    return items && items.length > 0 ? true : false;
  }

  add() {  
    this.routerExtensions.navigate(["/items/add"], { 
      clearHistory: false ,
    }); 
  }

}
