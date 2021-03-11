import { Component, OnInit } from '@angular/core';
import {MyEntity} from '../model/my-entity';
import {MyEntityService} from '../services/my-entity.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-entity',
  templateUrl: './update-entity.component.html',
  styleUrls: ['./update-entity.component.css']
})
export class UpdateEntityComponent implements OnInit {

  entity: MyEntity;
  entities: MyEntity[] = [];
  id: number;

  constructor(private entityService: MyEntityService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.entity = new MyEntity();
    this.id = this.activatedRoute.snapshot.params['id'];

    this.entityService.getEntityById(this.id)
      .subscribe(data => {
        console.log(data);
        this.entity = data;
      }, error => console.log(error));
  }

  update(): void {
    this.entityService.updateEntity(this.id, this.entity)
      .subscribe(() => this.goToHomePage());
  }

  goToHomePage() {
    this.router.navigate(['my-entity']);
  }

}
