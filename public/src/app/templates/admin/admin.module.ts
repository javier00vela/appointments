import { NgModule , CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminComponentsModule } from 'src/app/components/admin/admin.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule } from '@angular/material/icon';
import {MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ListAppointmentComponent } from './components/list-appointment/list-appointment.component';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { HistoryComponent } from './components/history/history.component';
import { RegisterAppointmentComponent } from './components/register-appointment/register-appointment.component';
import { RegisterObservationComponent } from './components/register-observation/register-observation.component';
import { RegisterDiagnosticComponent } from './components/register-diagnostic/register-diagnostic.component';
export const routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: 'list', component: ListAppointmentComponent },
  { path: 'register-appointment', component: RegisterAppointmentComponent },
  { path: 'register-diagnostic', component: RegisterDiagnosticComponent },
  { path: 'register-observation', component: RegisterObservationComponent },
];

@NgModule({
  declarations: [
    AdminComponent,
    IndexComponent,
    HistoryComponent,
    RegisterAppointmentComponent,
    RegisterObservationComponent,
    RegisterDiagnosticComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    FlexLayoutModule,
    AppRoutingModule,
    RouterModule.forChild(routes),
    AdminComponentsModule
  ],
  exports : [
    AdminComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AdminModule { }
