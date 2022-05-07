import React from 'react';
import EmployeeCard from './EmpoyeeCard';

const EmployeeList = (props) => {

    console.log(props);
    const renderEmployeeList = props.employee.map((emp, index) => <EmployeeCard emplist={emp} key={index} />);
    return (
<div>
    
{renderEmployeeList}
</div>
        
            
               



                
           





       
    );
}
export default EmployeeList;