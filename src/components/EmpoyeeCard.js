import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const EmployeeCard = (props) => {
    const { id, name, empid, dob, joiningdate, email } = props.emplist;
    // const params= useParams();
    // // const location = useLocation();
    // console(params);

    const tbstyle = {
        border: "1px solid #dddddd",
        textAlign: "center",
        padding: "8px",

    }
    console.log(props.emplist);
    

    return (

  <tbody>

  
<tr >
                <td><Link to={"/view/${id}"} state={{ employee: props.emplist }} style={{ color: "#E93742" }}>{name}</Link></td> 
                <td ><Link to={"/view/${id}"} state={{employee:props.emplist}} style={{ color: "#E93742" }}>{empid}</Link></td>
                <td >{dob}</td>
                <td>{joiningdate}</td>
                <td><Link to={"/view/${id}"} state={{ employee: props.emplist }} style={{ color: "#E93742" }}>{email}</Link></td>
                {/* <td><Link to="/edit" state={{employee: props.emplist}}><i className="edit alternate outine icon" style={{ color: "blue" }}></i></Link></td> */}
                <td><i className="trash alternate outine icon" style={{ color: "red" }} onClick={() => props.clickHandler(id)}></i></td>
            </tr>
    
       </tbody>
       
    );
}

export default EmployeeCard;