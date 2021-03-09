import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyEntityComponent} from './my-entity/my-entity.component';

const routes: Routes = [
  { path: 'my-entity', component: MyEntityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
