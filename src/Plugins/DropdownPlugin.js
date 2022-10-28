import { useState } from "react";
import React, { Component }  from 'react';

function DropdownPlugin(){

  const OPTIONS = ["Option 1","Option 2","Option 3"];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(OPTIONS[0]);

  const iconClass = "fa-solid ms-2" +( isModalOpen ? " fa-caret-up" : " fa-caret-down" );
  const listClass = "dropwodn-options bg-white list-decoration-none p-0 m-0" +( isModalOpen ? "" : " d-none" );

  function makeOptions(array){
    return(
      array.map(
        (elem,id) =>
        <li key={id} className="list-group-item">
          <a onClick={(e) => handleSelect(e)} href="#" className="list-group-item text-dark text-center border-top p-2">
            {elem}
          </a>
        </li>
      )
    )
    
  }

  function openModal(){

    setIsModalOpen(true);
    console.log("Modal Opened");

  }

  function closeModal(){

    setIsModalOpen(false);
    console.log("Modal Closed");

  }

  function handleSelect(e){

    setSelectedValue(e.target.innerHTML);
    closeModal();

  }

  function toggleModal(){

    switch (isModalOpen) {
      case true:
        closeModal();
        break;

      case false:
        openModal();
        break;
    
      default:
        openModal();
        break;
    }

  }

  return(
    <div className="dropdown-container btn border-dark border border-2 bg-white p-0">
      <div className="px-3 py-2 ">
        <button onClick={toggleModal} className="dropdown-button border-0 bg-white">
          {selectedValue}
        </button>
        <i className={iconClass}>
        </i>
      </div>
      
      <ul className={listClass}>
        {makeOptions(OPTIONS)}
      </ul>

    </div>

  )
}

export default DropdownPlugin