import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  //standalone:true,
  template:'<h1 class="commontext">List Of Employee Are Here</h1>',
  styles: ['.primary{color:red}']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
