import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IOffice } from 'src/app/interfaces/office.interface';
import { IResponse } from 'src/app/interfaces/response.interface';
import { OfficeUtilsService } from 'src/app/services/office/office.Utils.service';
@Component({
  selector: 'app-register-appointment',
  templateUrl: './register-appointment.component.html',
  styleUrls: ['./register-appointment.component.scss']
})
export class RegisterAppointmentComponent implements OnInit {
  public form: any;
  public officeControl: any;
  public doctorControl : any;
  public patientControl : any;
  public dateControl : any;
  

  constructor(private formBuilder: FormBuilder , private officeService : OfficeUtilsService) { }

  public listOffice : Observable<IResponse<IOffice[]>> = new Observable();

  private buildForm(){
    this.form = this.formBuilder.group({
      dateControl: new FormControl('', [Validators.required, Validators.minLength(3)]),
      officeControl: new FormControl('', [Validators.required]),
      patientControl: new FormControl('', [Validators.required]),
      doctorControl: new FormControl('', [Validators.required])
    });
  }

  private getOffices(){
    this.listOffice =  this.officeService.ListOffices();
  }

  ngOnInit(): void {
    this.buildForm();
    this.getOffices();
  }

}
