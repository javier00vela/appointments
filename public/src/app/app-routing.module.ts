import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './templates/admin/admin.component';
import { HistoryComponent } from './templates/admin/components/history/history.component';
import { IndexComponent } from './templates/admin/components/index/index.component';
import { ListAppointmentComponent } from './templates/admin/components/list-appointment/list-appointment.component';
import { RegisterAppointmentComponent } from './templates/admin/components/register-appointment/register-appointment.component';
import { RegisterDiagnosticComponent } from './templates/admin/components/register-diagnostic/register-diagnostic.component';
import { RegisterObservationComponent } from './templates/admin/components/register-observation/register-observation.component';

const routes: Routes = [
  {
    path: "admin", component: AdminComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'list', component: ListAppointmentComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'register-appointment', component: RegisterAppointmentComponent },
      { path: 'register-diagnostic', component: RegisterDiagnosticComponent },
      { path: 'register-observation', component: RegisterObservationComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
