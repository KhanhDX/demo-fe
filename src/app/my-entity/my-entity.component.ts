import { Component, OnInit } from '@angular/core';
import {MyEntity} from '../model/my-entity';
import {MyEntityService} from '../services/my-entity.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-entity',
  templateUrl: './my-entity.component.html',
  styleUrls: ['./my-entity.component.css']
})
export class MyEntityComponent implements OnInit {

  entities: MyEntity[] = [];
  name: string;


  constructor(private entityService: MyEntityService, private router: Router) { }

  ngOnInit(): void {
    this.getAllEntities();
  }

  getEntitiesByName(): void {
    this.entityService.getEntitiesByName(this.name).subscribe(data => {
      this.entities = data;
      console.log(data);
    });
  }

  getAllEntities(): void {
    this.entityService.getAllEntities().subscribe(data => {
      this.entities = data;
      console.log(data);
    });
  }

  goToUpdatePage(id: number): void {
    this.router.navigate(['/update-entity/' + id]);
  }

  deleteEntity(id: number): void{
    this.entityService.deleteEntity(id).subscribe(() => this.getAllEntities());
  }

}
