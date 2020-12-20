import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPerson } from 'src/app/interfaces/person.interface';
import { CrudService } from 'src/app/services/_general_/crud.service';

@Injectable({
  providedIn: 'root'
})
export class PersonRestService extends CrudService{

  private table = 'person';
  constructor(protected http : HttpClient  ) { 
    super(http);
  }

  public authPerson(person:IPerson){
    return this.post(`${this.table}/auth`,person);
  }

  

  public auth(){
    return new Observable((subscriber)=>{
       subscriber.next({ data : {
        idToken: 'jwtBearerToken', 
        expiresIn: 50000
      } , response : 200 ,  message : "  Ok" })
    })
  }


}
