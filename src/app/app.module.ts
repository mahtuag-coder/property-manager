import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import {TabMenuModule} from "primeng/tabmenu";
import { ListingsComponent } from './features/listings/listings.component';
import {MenubarModule} from "primeng/menubar";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
