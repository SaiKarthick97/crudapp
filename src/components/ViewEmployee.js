import React from "react";
import { useLocation, useParams, Link } from 'react-router-dom'

const ViewEmployee = (props) => {



    const location = useLocation();
    const { name, empid, dob, joiningdate, email } = location.state.employee;
    // const params= useParams();
    // console.log(params);
    //console.log(location.state.employee.id);
    // const { employee } = location.state;
    //console.log(employee);
    // const location = useLocation()
    // //const { state } = location.state;
    // console.log(props.state);
    // console.log(location.state);

    return (
        <div>
            <Link to="/" >
                <button className="ui button" style={{ float: "right", marginBottom: "20px", backgroundColor: "#E93742", color: "white" }} >Back</button>
            </Link>
            <h1>Employee Details:</h1>
            <table style={{ borderCollapse: "collapse", width: "70%" }}>
                <tr>
                    <th>Name</th>
                    <td>{name}</td>
                </tr>
                <tr>
                    <th>EmpId</th>
                    <td>{empid}</td>
                </tr>
                <tr>
                    <th>DateOfBirth</th>
                    <td>{dob}</td>
                </tr>
                <tr>
                    <th>JoiningDate</th>
                    <td>{joiningdate}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{email}</td>
                </tr>
            </table>
        </div>
    );
}

export default ViewEmployee;