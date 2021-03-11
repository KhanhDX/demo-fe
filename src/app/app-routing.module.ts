import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyEntityComponent} from './my-entity/my-entity.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CreateEntityComponent} from './create-entity/create-entity.component';
import {UpdateEntityComponent} from './update-entity/update-entity.component';

const routes: Routes = [
  { path: 'my-entity', component: MyEntityComponent},
  { path: 'create-entity', component: CreateEntityComponent},
  { path: 'update-entity/:id', component: UpdateEntityComponent},
  { path: '', component: DashboardComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
