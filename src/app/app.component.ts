import { Component, OnInit } from "@angular/core";
import { ItemsService } from "./items/_services/items.service";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit { 

    constructor(
        private itemsService:ItemsService
    ) {}

    ngOnInit() {
        this.itemsService.fetch().subscribe();
    }
}
