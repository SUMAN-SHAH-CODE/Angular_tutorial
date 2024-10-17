import { Component } from '@angular/core';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //<--import class name if its standalone -->
  //imports:[EmployeeListComponent,AddEmployeeComponent]<---if its angular18 standalone then ---->
})
export class AppComponent {
  title = 'SUMAN LEARNING ';
}
