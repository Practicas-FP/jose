import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  employees = [
    {
      name: "Ainhoa",
      employeeID: "2001",
      department: "IT"
    },
    {
      name: "David",
      employeeID: "2009",
      department: "IT"
    },
    {
      name: "Cecilia",
      employeeID: "1996",
      department: "IT"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
