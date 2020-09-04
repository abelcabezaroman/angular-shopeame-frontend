import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementPageRoutingModule } from './management-page-routing.module';
import { ManagementPageComponent } from './management-page.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [ManagementPageComponent],
  imports: [
    CommonModule,
    ManagementPageRoutingModule,
    ReactiveFormsModule
  ]
})
export class ManagementPageModule { }
