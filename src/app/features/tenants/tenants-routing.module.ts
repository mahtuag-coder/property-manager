import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TenantsComponent} from "./tenants.component";
import {TenantDetailsComponent} from "./tenant-details/tenant-details.component";

const routes: Routes = [
  { path: '', component: TenantsComponent },
  { path: ':id', component: TenantDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantsRoutingModule { }
