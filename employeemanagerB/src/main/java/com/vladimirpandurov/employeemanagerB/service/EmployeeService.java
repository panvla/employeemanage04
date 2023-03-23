package com.vladimirpandurov.employeemanagerB.service;

import com.vladimirpandurov.employeemanagerB.domain.Employee;
import com.vladimirpandurov.employeemanagerB.exception.EmployeeNotFoundException;
import com.vladimirpandurov.employeemanagerB.repositoroy.EmployeeRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class EmployeeService {

    private final EmployeeRepository employeeRepository;


    public Employee getEmployee(Long id){
        return this.employeeRepository.findEmployeeById(id).orElseThrow(() -> new EmployeeNotFoundException("Employee with id " + id + " not found!"));
    }

    public List<Employee> getAllEmployees(){
        return this.employeeRepository.findAll();
    }

    public Employee saveEmployee(Employee employee){
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return this.employeeRepository.save(employee);
    }

    public Employee updateEmployee(Employee employee){
        return this.employeeRepository.save(employee);
    }

    public void deleteEmployee(Long id){
        this.employeeRepository.deleteEmployeesById(id);
    }

}
