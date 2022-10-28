import CreateEmployeePage from "./Pages/CreateEmployeePage";
import CurrentEmployeesPage from "./Pages/CurrentEmployeesPage";
import {BrowserRouter as Router,Routes,Route ,Navigate} from "react-router-dom";
import React, { useState}  from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



function App() {

  const [user,updateUser] = useState(
    [
      {
        "FirstName": "",
        "LastName": "",
        "BirthDate": "Oct 27 2022",
        "StartDate": "Oct 27 2022",
        "Street": "",
        "City": ""
      },
    ]
  );
  const handleChange = data => {
    updateUser([...user,data])
  }

  console.log(user,"APP.JS");


  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateEmployeePage handleChange={handleChange}/>} />
        <Route path="/list" element={<CurrentEmployeesPage users={user}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
