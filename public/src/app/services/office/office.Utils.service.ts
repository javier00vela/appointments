import { Injectable } from '@angular/core';
import { AuthService } from '../../utils/auth/auth.service';
import { OfficeRestService } from './office.rest.service';

@Injectable({
  providedIn: 'root'
})
export class OfficeUtilsService {

  constructor(private officeRestService : OfficeRestService ) { }

  public ListOffices(){
    console.log(1222);
    
    return this.officeRestService.GetAllOffices();
  }



}
