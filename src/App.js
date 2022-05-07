import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import { useState,useEffect } from 'react';


function App() {
  const LOCAL_STORAGE_KEY = "employees";

  const [employees,setEmployees]=useState([]);


  
  const addEmployeeHandler= (emp)=>{
    setEmployees([...employees,emp])
    console.log(emp);
  }

  useEffect(()=>{
    const retriveEmployees = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveEmployees) setEmployees(retriveEmployees);

  },[])
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(employees));
  },[employees]);
  
  return (
    <div className='ui container'>
    <Header />
    <AddEmployee  addEmployeeHandler={addEmployeeHandler}/>
    <EmployeeList employee={employees}/>
    </div>
  );
}

export default App;
