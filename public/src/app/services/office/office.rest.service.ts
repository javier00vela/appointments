import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudService } from 'src/app/services/_general_/crud.service';

@Injectable({
  providedIn: 'root'
})
export class OfficeRestService extends CrudService{
  private table = "office";

  constructor(protected http : HttpClient  ) { 
    super(http);
  }

  public GetAllOffices(){
    return this.getAll(`${this.table}/`);
  }



}
