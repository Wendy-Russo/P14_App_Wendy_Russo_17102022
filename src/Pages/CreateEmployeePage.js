import Header from "../Components/Header"
import CreateEmployeeForm from "../Components/CreateEmployeeForm"
import { useState } from "react"
import React, { Component }  from 'react';
import { Navigate } from "react-router-dom";


function CreateEmployeePage(props){

  const handleChange = props.handleChange;

  return(
    <div className="App bg-light ">
      <Header active={"create"}/>

      <main>
        <CreateEmployeeForm handleChange={handleChange}/>        
      </main>
    </div>
  )
}

export default CreateEmployeePage