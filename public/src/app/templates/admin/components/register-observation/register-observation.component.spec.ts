import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterObservationComponent } from './register-observation.component';

describe('RegisterObservationComponent', () => {
  let component: RegisterObservationComponent;
  let fixture: ComponentFixture<RegisterObservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterObservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
