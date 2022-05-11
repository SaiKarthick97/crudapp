
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Outlet, Route, Routes, useParams } from 'react-router-dom';
import * as uuid from 'uuid';
import './App.css';
import Header from './components/Header';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import EmployeeList from './components/EmployeeList';
import ViewEmployee from './components/ViewEmployee';



function App() {
  const LOCAL_STORAGE_KEY = "employees";

  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [serchResults, setSearchResukts] = useState([]);

  const params = useParams();
  console.log(params);



  const addEmployeeHandler = (emp) => {
    setEmployees([...employees, { id: uuid.v4(), ...emp }]);
    console.log(emp);
  }
  // const updateEmployeeHandler= (id)=>{


  //   setEmployees([...employees,{ id: uuid.v4(), ...emp }]);
  //     }
  //   return x;

  // console.log(emp);

  const removeEmployeeHandler = (id) => {
    const newEmployeeList = employees.filter((employee) => {
      return employee.id !== id;
    });

    setEmployees(newEmployeeList);
  }

  const searchHandler = (searchTerm) => {

    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newEmployeeList = employees.filter((employee) => {

        return Object.values(employee).join(" ").toLowerCase().includes(searchTerm.toLowerCase());

      });
      setSearchResukts(newEmployeeList);
    }
    else {
      setSearchResukts(employees);
    }

  }

  useEffect(() => {
    console.log("get");
    const retriveEmployees = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveEmployees) setEmployees(retriveEmployees);

  }, []);
  useEffect(() => {
    console.log("set");
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(employees));
  }, [employees]);


  return (

    <div className='ui container'>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<EmployeeList employee={searchTerm.length < 1 ? employees : serchResults} getEmpId={removeEmployeeHandler} term={searchTerm} serchKeyword={searchHandler} />} />
          <Route path="/add" element={<AddEmployee addEmployeeHandler={addEmployeeHandler} />} />
          {/* <Route path="/edit" element={<UpdateEmployee updateEmployeeHandler={updateEmployeeHandler} />} /> */}
          <Route path="/view/:id" element={<ViewEmployee />} />
        </Routes>

        {/*  */}


      </Router>





      {/* addEmployeeHandler={addEmployeeHandler}
      employee={employees} getEmpId={removeEmployeeHandler} */}
    </div>
  );
}

export default App;
