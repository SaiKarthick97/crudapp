import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AddEmployee = (props) => {


    const history = useNavigate();
    console.log(props);

    const [emp, setEmp] = useState({
        name: "",
        empid: "",
        dob: "",
        joiningdate: "",
        email: ""
    });


    const add = (e) => {
        e.preventDefault();
        console.log(props);

        if (emp.name === "" || emp.empid === "" || emp.dob === "" || emp.joiningdate === "" || emp.email === "") {
            alert("All fields required");
            return;
        }

        props.addEmployeeHandler(emp);
        setEmp({ ...emp, name: "", empid: "", dob: "", joiningdate: "", email: "" });


        history('/');


    }

    return (
        <div className='ui main'>
            <Link to="/" >
                <button className="ui button" style={{ float: "right", marginBottom: "20px", backgroundColor: "#E93742", color: "white" }} >Back</button>
            </Link>

            <h2>AddEmployee</h2>



            <form className="ui form" onSubmit={add}>

                <div className="four field wide">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" value={emp.name} onChange={(e) => setEmp({ ...emp, name: e.target.value })} />
                </div>
                <div className="four field wide">
                    <label>EmpId</label>
                    <input type="text" name="empid" placeholder="EmpID" value={emp.empid} onChange={(e) => setEmp({ ...emp, empid: e.target.value })} />
                </div>
                <div className="four field wide">
                    <label>DateOfBirth</label>
                    <input type="date" name="dob" placeholder="Dob" value={emp.dob} onChange={(e) => setEmp({ ...emp, dob: e.target.value })} />
                </div>
                <div className="four field wide">
                    <label>JoiningDate</label>
                    <input type="date" name="joiningdate" placeholder="joiningdate" value={emp.joiningdate} onChange={(e) => setEmp({ ...emp, joiningdate: e.target.value })} />
                </div>
                <div className="four field wide">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" value={emp.email} onChange={(e) => setEmp({ ...emp, email: e.target.value })} />
                </div>
                <div className="field">
                    <button className="ui button" style={{ backgroundColor: "#E93742", color: "white" }}>Add</button>
                </div>
            </form>


        </div>


    );



}
export default AddEmployee;