import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudService } from 'src/app/services/_general_/crud.service';

@Injectable({
  providedIn: 'root'
})
export class PersonRestService extends CrudService{

  constructor(protected http : HttpClient  ) { 
    super(http);
  }

  public buscar(){
    return this.getAll("hola/mundo");
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
