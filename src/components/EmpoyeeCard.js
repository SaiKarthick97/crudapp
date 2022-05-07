import React from 'react';

const EmployeeCard = (props) => {
    const { name,empid,dob,joingdate,email } = props.emplist;
    const tbstyle = {
        border: "1px solid #dddddd",
        textAlign: "left",
        padding: "8px",

    }
    return (
        <div style={{ marginTop: "20px" }}>

            <table style={{ borderCollapse: "collapse", width: "100%" }}>

                <tbody>
                    <tr >
                        <td style={tbstyle}>{name}</td>
                        <td style={tbstyle}>{empid}</td>
                        <td style={tbstyle}>{dob}</td>
                        <td style={tbstyle}>{joingdate}</td>
                        <td style={tbstyle}>{email}</td>
                    </tr>
                </tbody>


            </table>
        </div>


    );
}

export default EmployeeCard;