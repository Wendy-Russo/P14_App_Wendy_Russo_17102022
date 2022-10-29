import Header from "../Components/Header"
import CreateEmployeeForm from "../Components/CreateEmployeeForm"
import React from 'react';


function CreateEmployeePage(props){

  const handleChange = props.handleChange;

  return(
    <div className="App bg-light  ">
      <Header active={"create"}/>

      <main>
        <CreateEmployeeForm handleChange={handleChange}/>        
      </main>
    </div>
  )
}

export default CreateEmployeePage