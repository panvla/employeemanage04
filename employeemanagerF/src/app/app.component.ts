import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from './interface/employee';
import { EmployeeService } from './service/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public employee: Employee;
  public employees: Employee[];
  public editEmployee: Employee;
  public deleteEmployee: Employee;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  public onAddEmployee(addForm: NgForm): void {
    document.getElementById('add-employee-form').click();
    this.employeeService.saveEmployee(addForm.value).subscribe(
      (response: Employee) => {
        this.getEmployees();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        addForm.reset();
      }
    );
  }

  public onEditEmployee(editForm: NgForm): void {
    document.getElementById('edit-employee-form').click();
    this.employeeService.updateEmployee(editForm.value).subscribe(
      (response: Employee) => {
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  onDeleteEmployee(employee: Employee): void {
    this.employeeService.deleteEmployee(employee.id).subscribe(
      (response: void) => {
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  onOpenModal(employee: Employee, mode: string): void {
    const container = document.getElementById('main-content');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      this.editEmployee = employee;
      button.setAttribute('data-bs-target', '#editEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteEmployee = employee;
      button.setAttribute('data-bs-target', '#deleteEmployeeModal');
    }
    container.appendChild(button);
    button.click();
  }
}
