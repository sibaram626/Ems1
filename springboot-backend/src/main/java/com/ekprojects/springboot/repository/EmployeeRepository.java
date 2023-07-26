package com.ekprojects.springboot.repository;

import com.ekprojects.springboot.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    //all crud database methods to interact with database.
}
