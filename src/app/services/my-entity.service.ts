import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MyEntity} from '../model/my-entity';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {MessagesService} from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class MyEntityService {

  url = 'http://localhost:8080/demo/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private log(message: string) {
    this.messageService.add(`EntityService: ${message}`);
  }

  constructor(private http: HttpClient, private messageService: MessagesService) { }

  getAllEntities(): Observable<MyEntity[]> {
    return this.http.get<MyEntity[]>(this.url)
      .pipe(catchError(this.handleError<MyEntity[]>('getEntities', [])));
  }

  getEntityById(id: number): Observable<MyEntity> {
    return this.http.get<MyEntity>(this.url + `${id}`)
      .pipe(catchError(this.handleError<MyEntity>('getEntityById')));
  }

  getEntitiesByName(name: string): Observable<MyEntity[]> {
    return this.http.get<MyEntity[]>(this.url + `find-by-name/${name}`)
      .pipe(catchError(this.handleError<MyEntity[]>('getEntityById', [])));
  }

  addNewEntity(entity: MyEntity): Observable<any> {
    return this.http.post<MyEntity>(this.url + 'create-entity', entity, this.httpOptions)
      .pipe(
      tap((newEntity: MyEntity) => this.log(`added entity w/ id=${newEntity.name}`)),
      catchError(this.handleError<MyEntity>('addEntity'))
    );
  }

  deleteEntity(id: number): Observable<any> {
    return this.http.delete(this.url + `delete-entity/${id}`)
      .pipe(
        tap((newEntity: MyEntity) => this.log(`deleted entity w/ id=${newEntity.name}`)),
        catchError(this.handleError<any>('deleteEntity'))
      );
  }

  updateEntity(id: number, entity: MyEntity): Observable<any> {
    return this.http.put(this.url + `update-entity/${id}`, entity, this.httpOptions)
      .pipe(
        tap((newEntity: MyEntity) => this.log(`updated entity w/ id=${newEntity.name}`)),
        catchError(this.handleError<MyEntity>('updateEntity'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
