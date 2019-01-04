import { Component, OnInit, Input } from '@angular/core';
import { ItemModel } from '../_models/item.model';
import { ItemsService } from '../_services/items.service';

@Component({
  selector: 'ns-items-add-edit',
  templateUrl: './items-add-edit.component.html',
  styleUrls: ['./items-add-edit.component.css'],
  moduleId: module.id,
})
export class ItemsAddEditComponent implements OnInit {

  @Input() item: ItemModel;

  constructor(
    private itemsService: ItemsService,
  ) { }

  ngOnInit() {
  }

}