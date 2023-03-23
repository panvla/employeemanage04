package com.vladimirpandurov.employeemanagerB.controller;

import com.vladimirpandurov.employeemanagerB.domain.Employee;
import com.vladimirpandurov.employeemanagerB.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/employees")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin
public class EmployeeController {

    private final EmployeeService employeeService;

    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable("id") Long id){
        return new ResponseEntity<>(this.employeeService.getEmployee(id), HttpStatus.OK);
    }
    @GetMapping
    public ResponseEntity<List<Employee>> getAllEmployees(){
        return new ResponseEntity<>(this.employeeService.getAllEmployees(), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Employee> saveEmployee(@RequestBody Employee employee){
        return new ResponseEntity<>(this.employeeService.saveEmployee(employee), HttpStatus.OK);
    }
    @PutMapping
    public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee){
        return new ResponseEntity<>(this.employeeService.updateEmployee(employee), HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id") Long id){
        this.employeeService.deleteEmployee(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
