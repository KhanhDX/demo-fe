import { Component, OnInit } from '@angular/core';
import {MyEntityService} from '../services/my-entity.service';
import {MyEntity} from '../model/my-entity';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {async} from 'rxjs';

@Component({
  selector: 'app-create-entity',
  templateUrl: './create-entity.component.html',
  styleUrls: ['./create-entity.component.css']
})
export class CreateEntityComponent implements OnInit {

  entity: MyEntity = new MyEntity();
  entities: MyEntity[] = [];

  constructor(private entityService: MyEntityService,
              private router: Router) { }

  ngOnInit(): void {
  }

  add(): void {
    console.log(this.entity.name);
    this.entityService.addNewEntity(this.entity)
      .subscribe(_ => {
        this.entities.push(this.entity);
        this.goToHomePage();
      });
  }

  goToHomePage() {
    this.router.navigate(['my-entity']);
  }

}
