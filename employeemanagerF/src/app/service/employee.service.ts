import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../interface/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private readonly apiUrl = 'http://localhost:8080/api/v1/employees';

  constructor(private http: HttpClient) {}

  public getEmployee(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${employeeId}`);
  }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}`);
  }

  public saveEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiUrl}`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}`, employee);
  }

  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${employeeId}`);
  }
}
