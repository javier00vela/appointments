import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from 'src/app/components/admin/admin-header/admin-header.component';
import { AdminComponentsModule } from 'src/app/components/admin/admin.module';


@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent
  ],
  imports: [
    AdminComponentsModule,
    CommonModule
  ]
})
export class AdminModule { }
