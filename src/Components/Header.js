import React from 'react';
import { Navigate } from "react-router-dom";
import { useState } from "react"


function Header(props){

  const[redirect, updateRedirect] = useState(false);
  const[redirectSee, updateRedirectSee] = useState(false);

  function handleCreate(){

    if(window.location.pathname !== "/"){
    
      updateRedirect(true);
      updateRedirectSee(false);
    }
  }
  function handleSee(){

    if(window.location.pathname !== "/list"){

      updateRedirectSee(true);
      updateRedirect(false);
    }
  }


  const ACTIVE = props.active;

  return(
    <header className="row  justify-content-center border-bottom">
      <div className="col-11 my-2">
        <nav className="navbar justify-content-between">
          <a className="navbar-brand me-auto" href="/">
            HRnet
          </a>
          <div className="navbar" id="navbarNav">
            <ul className=" nav nav-pills">
              <li  onClick={handleCreate} className={ACTIVE == "create" ? "nav-link active": "nav-link"} aria-current="page">
                {redirect &&<Navigate to="/" replace="true" />}
                Create Employee
              </li>
              <li onClick={handleSee} className={ACTIVE === "view" ? "nav-link active": "nav-link"} >
                {redirectSee &&<Navigate to="/list" replace="true" />} 
                View Current Employees
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

/*<a className={ACTIVE === "create" ? "nav-link active": "nav-link"} aria-current="page" href="#">Create employee</a>*/

export default Header