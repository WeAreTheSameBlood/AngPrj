import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './components/order/order.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes:Routes = [
  {path:'', component:OrderComponent},
  {path:'contacts', component:ContactsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
