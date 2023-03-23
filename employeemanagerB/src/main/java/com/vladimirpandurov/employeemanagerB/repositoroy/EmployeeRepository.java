package com.vladimirpandurov.employeemanagerB.repositoroy;

import com.vladimirpandurov.employeemanagerB.domain.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    Optional<Employee> findEmployeeById(Long id);

    void deleteEmployeesById(Long id);

}
