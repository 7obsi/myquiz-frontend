import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../dtos/employee';
import {Globals} from '../global/globals';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private employeeBaseUri: string = this.globals.backendUri + '/employees';

  constructor(private httpClient: HttpClient, private globals: Globals) {
  }

  /**
   * Loads all employees from the backend
   */
  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.globals.backendUri + '/employees');
  }

  /**
   * Loads specific employee from the backend
   * @param id of employee to load
   */
  getEmployeeById(id: number): Observable<Employee> {
    console.log('Load employee details for ' + id);
    return this.httpClient.get<Employee>(this.employeeBaseUri + '/' + id);
  }

  /**
   * Persists employee to the backend
   * @param employee to persist
   */
  createArtist(employee: Employee): Observable<Employee> {
    console.log('Create employee with name: ' + employee.name);
    return this.httpClient.post<Employee>(this.employeeBaseUri, employee);
  }

  /**
   * delete employee from backend
   * @param id of employee to delete
   */
  deleteEmployee(id: number): Observable<any> {
    console.log('Delete employee with id ' + id);
    return this.httpClient.delete<any>(this.employeeBaseUri + '/' + id);
  }
}
