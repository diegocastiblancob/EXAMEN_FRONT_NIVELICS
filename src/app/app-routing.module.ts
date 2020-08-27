import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FilterComponent } from './components/filter/filter.component';
/**
 * declarar rutas para la navegacion entre componentes
 */
const routes: Routes=[
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'filtrar', component: FilterComponent},
  {path: '**', component: DashboardComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
