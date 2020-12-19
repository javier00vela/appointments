import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/services/_general_/crud.service';
import { AuthService } from '../../utils/auth/auth.service';
import { PersonRestService } from './person.rest.service copy';

@Injectable({
  providedIn: 'root'
})
export class PersonUtilsService {

  constructor(private personRestService : PersonRestService ) { }


  public auth(){
    this.personRestService.auth().subscribe(data => {
      AuthService.setSession(data)
    })
  }

  public buscar(){
    this.personRestService.buscar().subscribe(data => {
     console.log(data);
     
    })
  }



}
