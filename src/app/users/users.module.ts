import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './list/list.component';
import { DataTablesModule } from 'angular-datatables';
import { CreateComponent } from './create/create.component';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from '../sidebar/sidebar.component';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
