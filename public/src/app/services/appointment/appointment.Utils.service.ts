import { Injectable } from '@angular/core';
import { IAppointment } from 'src/app/interfaces/appointment.interface';
import { AuthService } from '../../utils/auth/auth.service';
import { AppointmentRestService } from './appointment.rest.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentUtilsService {

  constructor(private appointmentRestService : AppointmentRestService ) { }


  public getListAppointments(){
    return this.appointmentRestService.getAllApointment();
  }

  public getListAppointmentsByDoctorId(){
    return this.appointmentRestService.getAllApointment();
  }

  public postAppointments(appointment : IAppointment){
    return this.appointmentRestService.sendApointment(appointment);
  }




}
