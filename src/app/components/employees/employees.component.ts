import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Employee} from '../../dtos/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[] = [];
  employeeForm = new FormGroup({
    name: new FormControl(''),
    role: new FormControl('')
  });

  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.loadEmployees();
  }

  private loadEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
      console.log('Employees: ' + this.employees);
    });
  }


  onSubmit(): void {
    console.warn(this.employeeForm.value);
    const empl = new Employee(0, this.employeeForm.value.name, this.employeeForm.value.role);

    this.employeeService.createArtist(empl).subscribe((newEmployee: Employee) => {
        console.log('Successfully created employee: ' + newEmployee.name);
      },
      error => {
        console.log('Could not create employee');
      });
  }

}
