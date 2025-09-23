import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from "./features/dashboard/dashboard.component";
import {ListingsComponent} from "./features/listings/listings.component";
import {TenantsComponent} from "./features/tenants/tenants.component";

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'listings',
    component: ListingsComponent
  }, {
    path: 'tenants',
    loadChildren: () => import('./features/tenants/tenants.module').then(m => m.TenantsModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
