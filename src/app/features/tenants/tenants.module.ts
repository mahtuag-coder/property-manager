import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TenantsRoutingModule} from './tenants-routing.module';
import {TenantsComponent} from "./tenants.component";
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";


@NgModule({
  declarations: [TenantsComponent
  ],
  imports: [
    CommonModule,
    TenantsRoutingModule,
    TableModule,
    InputTextModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TenantsModule {
}
