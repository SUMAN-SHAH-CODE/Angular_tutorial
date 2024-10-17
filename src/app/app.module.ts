import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
