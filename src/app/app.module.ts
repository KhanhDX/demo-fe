import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {FormsModule} from '@angular/forms';
import { MyEntityComponent } from './my-entity/my-entity.component';
import { EntityDetailComponent } from './entity-detail/entity-detail.component';
import { CreateEntityComponent } from './create-entity/create-entity.component';
import { UpdateEntityComponent } from './update-entity/update-entity.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MyEntityComponent,
    EntityDetailComponent,
    CreateEntityComponent,
    UpdateEntityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
