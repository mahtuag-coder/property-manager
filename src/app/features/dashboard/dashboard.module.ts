import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from "./dashboard.component";
import {MenubarModule} from "primeng/menubar";


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MenubarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class DashboardModule {
}
