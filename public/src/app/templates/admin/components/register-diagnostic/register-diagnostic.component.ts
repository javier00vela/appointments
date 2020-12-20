import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register-diagnostic',
  templateUrl: './register-diagnostic.component.html',
  styleUrls: ['./register-diagnostic.component.scss']
})
export class RegisterDiagnosticComponent implements OnInit {
  public form: any;
  public observacionControl: any;

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
