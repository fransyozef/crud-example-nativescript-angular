import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FakeBackendInterceptor } from "./_shared/fakebackend";

import { ItemsAddEditComponent } from './items/items-add-edit/items-add-edit.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemsListItemComponent } from './items/items-list-item/items-list-item.component';
import { ItemEditComponent } from './items/item-edit/item-edit.component';
import { ItemAddComponent } from './items/item-add/item-add.component';
import { ItemsComponent } from "./items/items.component";
import { ItemsService } from "./items/_services/items.service";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        NativeScriptUIDataFormModule,
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemsAddEditComponent,
        ItemsListComponent,
        ItemsListItemComponent,
        ItemEditComponent,
        ItemAddComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: FakeBackendInterceptor,
            multi: true
          },
          ItemsService,  
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
