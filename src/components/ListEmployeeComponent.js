import { useEffect, useState } from "react";

import React from 'react'
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";

export const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([])  
  useEffect(()=>{
    getAllEmployees();
  }, [])

  const getAllEmployees = () => {
    EmployeeService.getAllEmployees().then((response)=>{
        setEmployees(response.data)
        console.log(response.data)
    }).catch(error=>{
        console.log(error);
    })
  }

  const deleteEmployee = (employeeId) =>{
    console.log(employeeId+"gfh")
    EmployeeService.deleteEmployee(employeeId).then((response)=>{
        console.log(employeeId)
        getAllEmployees();    
    }).catch(error=>{
        console.log(error)
    })
  }
  return (
    <div className="container">
        <h2 className="text-center"> List Employees</h2>
        <Link to="/add-employee" className="btn btn-primary mb-2">Add Employee</Link>
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                <th>Employee Id</th>
                <th>Employee FirstName</th>
                <th>Employee LastName</th>
                <th>Employee EmailId</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(
                        employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                            <td>
                                <Link className="btn btn-info" to={`/edit-employee/${employee.id}`}>Update</Link>
                                <button className="btn btn-danger" style={{marginLeft:"10px"}} onClick={()=>deleteEmployee(employee.id) }>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}