import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register-observation',
  templateUrl: './register-observation.component.html',
  styleUrls: ['./register-observation.component.scss']
})
export class RegisterObservationComponent implements OnInit {
  public form: any;
  public observacionControl:any;
  constructor(private formBuilder: FormBuilder) { }

  private buildForm(){
    this.form = this.formBuilder.group({
      observacionControl: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }

  ngOnInit(): void {
    this.buildForm();
  }

}
