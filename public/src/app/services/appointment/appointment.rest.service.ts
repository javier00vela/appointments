import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppointment } from 'src/app/interfaces/appointment.interface';
import { CrudService } from 'src/app/services/_general_/crud.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentRestService extends CrudService{
  private table = 'appointment';

  constructor(protected http : HttpClient  ) { 
    super(http);
  }

  public getAllApointment(){
    return this.getAll(`${this.table}/all`);
  }

  public getAllApointmentByDoctor(){
    return this.getAll(`${this.table}/doctor/all`);
  }

  public sendApointment(appointment : IAppointment){
    return this.post(`${this.table}/`, appointment);
  }


}
