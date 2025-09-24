import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {TenantsRoutingModule} from './tenants-routing.module';
import {TenantsComponent} from "./tenants.component";
import {TenantService} from "../../core/services/tenant.service";
import {SharedModule} from "../../shared/shared/shared.module";


@NgModule({
  declarations: [TenantsComponent
  ],
  imports: [
    TenantsRoutingModule,
    SharedModule
  ],
  providers: [TenantService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TenantsModule {
}
