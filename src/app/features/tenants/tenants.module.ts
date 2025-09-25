import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {TenantsRoutingModule} from './tenants-routing.module';
import {TenantsComponent} from "./tenants.component";
import {TenantService} from "../../core/services/tenant.service";
import {SharedModule} from "../../shared/shared/shared.module";
import { TenantDetailsComponent } from './tenant-details/tenant-details.component';
import {CardModule} from "primeng/card";


@NgModule({
  declarations: [TenantsComponent, TenantDetailsComponent
  ],
  imports: [
    TenantsRoutingModule,
    SharedModule,
    CardModule
  ],
  providers: [TenantService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TenantsModule {
}
