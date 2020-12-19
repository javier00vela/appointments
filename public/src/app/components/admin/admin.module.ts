import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './admin-header/admin-header.component';

@NgModule({
  declarations: [
    AdminHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    AdminHeaderComponent
  ]
})
export class AdminComponentsModule { }
