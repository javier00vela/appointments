import { Injectable } from '@angular/core';
import { IPerson } from 'src/app/interfaces/person.interface';
import { AuthService } from '../../utils/auth/auth.service';
import { PersonRestService } from './person.rest.service';

@Injectable({
  providedIn: 'root'
})
export class PersonUtilsService {

  constructor(private personRestService : PersonRestService ) { }


  public authPerson(person :IPerson){
    this.personRestService.authPerson(person).subscribe(data => {
      AuthService.setSession(data)
    })
  }



}
