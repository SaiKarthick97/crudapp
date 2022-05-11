import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import EmployeeCard from './EmpoyeeCard';
import './tablestyle.css';

const EmployeeList = (props) => {

    const inputEl = useRef("");
    console.log(props);

    const deleteEmployeeHandler = (id) => {
        props.getEmpId(id);

    }
    const getSearchTerm = () => {

        props.serchKeyword(inputEl.current.value);

    }
    const renderEmployeeList = props.employee.map((emp) => <EmployeeCard emplist={emp} clickHandler={deleteEmployeeHandler} key={emp.id} />);
    return (

        <div style={{ marginTop: "20px" }}>
            <Link to="/add"><button className="ui button" style={{ float: "right", marginBottom: "20px", backgroundColor: "#E93742", color: "white" }}>AddEmployee</button></Link>
            <h2>Employee List</h2>

            <div className='ui search'>
                <div className='ui icon input'>
                    <input ref={inputEl} type="text" placeholder='Search Employees' className='prompt' value={props.term} onChange={getSearchTerm} />
                    <i className='search icon'></i>
                </div>

            </div>

            <table style={{ borderCollapse: "collapse", width: "100%", marginTop: "20px" }}>
                <tr><th>Name</th>
                    <th>EmpId</th>
                    <th>DateOfBirth</th>
                    <th>JoiningDate</th>
                    <th>Email</th>
                    {/* <th>Update</th> */}
                    <th>Delete</th>

                </tr>

                {renderEmployeeList.length > 0 ? renderEmployeeList : "No contacts Available"}
            </table>

        </div>
















    );
}
export default EmployeeList;