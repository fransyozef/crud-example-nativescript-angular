import { Component, OnInit, Input } from '@angular/core';
import { ItemModel } from '../_models/item.model';
import { ItemsService } from '../_services/items.service';

@Component({
  selector: 'ns-items-list-item',
  templateUrl: './items-list-item.component.html',
  styleUrls: ['./items-list-item.component.css'],
  moduleId: module.id,
})
export class ItemsListItemComponent implements OnInit {

  @Input() item: ItemModel;

  constructor(
    private itemsService: ItemsService,
  ) { }

  ngOnInit() {
  }

}
