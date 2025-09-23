import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from "./features/dashboard/dashboard.component";
import {ListingsComponent} from "./features/listings/listings.component";

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'listings',
    component: ListingsComponent
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
