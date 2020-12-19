import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDiagnosticComponent } from './register-diagnostic.component';

describe('RegisterDiagnosticComponent', () => {
  let component: RegisterDiagnosticComponent;
  let fixture: ComponentFixture<RegisterDiagnosticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterDiagnosticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDiagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
