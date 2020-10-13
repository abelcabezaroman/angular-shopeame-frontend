import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementPageRoutingModule } from './management-page-routing.module';
import { ManagementPageComponent } from './management-page.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ManagementPageComponent],
  imports: [
    CommonModule,
    ManagementPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ManagementPageModule { }
