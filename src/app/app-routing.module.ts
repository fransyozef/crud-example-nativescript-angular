import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { ItemsComponent } from "./items/items.component";
import { ItemEditComponent } from "./items/item-edit/item-edit.component";
import { ItemAddComponent } from "./items/item-add/item-add.component";

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: 'items/edit/:id', component: ItemEditComponent },
    { path: 'items/add', component: ItemAddComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }