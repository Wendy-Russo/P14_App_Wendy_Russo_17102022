import DatePicker from 'react-date-picker';
import ReactModal from "react-modal";
import { useState } from 'react';
import React from 'react';
import DropdownPlugin from "@wendy-russo/simple-react-dropdown"

ReactModal.setAppElement('#root')
const DEPARTMENT = ["Department","Sales","Marketing","Enineering","Human Resources","Legal"];
const STATE = ['State','Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];


function CreateEmployeeForm(props){


  const [birth, changeBirth] = useState(new Date());
  const [startDate, changeStartDate] = useState(new Date());
  const [modal,setModal] = useState(0)

  const handleChange = props.handleChange;

  function handleOpenModal () {
    setModal({ showModal: true });
  }
  
  function handleCloseModal() {
    setModal({ showModal: false });
  }

  const handleSubmit = event => {
    event.preventDefault()
    const FIRST_NAME = { "FirstName" : document.getElementById("first-name").value}
    const LAST_NAME = { "LastName" : document.getElementById("last-name").value}
    const BIRTH_DATE = { "BirthDate" : birth.toString().slice(4,15)}
    const START_DATE = { "StartDate" : startDate.toString().slice(4,15)}
    const STREET = { "Street" : document.getElementById("street").value}
    const CITY = { "City" : document.getElementById("city").value}
    const STATE = {"State" : document.getElementById("State").value}
    const ZIPCODE = { "Zipcode" : document.getElementById("zipcode").value}
    const DEPARTMENT = {"Department" : document.getElementById("Department").value}

    const USER_DATA = {...FIRST_NAME,...LAST_NAME,...BIRTH_DATE,...START_DATE,...STREET,...CITY,...STATE,...ZIPCODE,...DEPARTMENT};
    handleChange(USER_DATA);
    handleOpenModal();
  }

  return(
    <div className='row justify-content-center'>
      <form className="col-xl-4 col-md-6 col-10 py-5" onSubmit={handleSubmit} action="#" id="create-employee">

        <div className="mb-3">
          <input className="form-control border border-2 border-top-0 border-opacity-50 border-start-0 border-end-0 border-dark shadow-sm" type="text" placeholder="First Name" id="first-name" />
        </div>

        <div className="mb-3">
          <input className="form-control border border-2 border-top-0 border-opacity-50 border-start-0 border-end-0 border-dark shadow-sm" type="text" placeholder="Last Name" id="last-name" />
        </div>

        <div className="mb-3">
          <label className="form-label"htmlFor="first-name" >
            Date Of Birth
          </label>
          <DatePicker className="form-control border border-2 border-opacity-50 border-dark shadow-sm m-0 p-1" id="birth-date" onChange={changeBirth} value={birth}/>
        </div>

        <div className="mb-3">
          <label className="form-label"htmlFor="first-name" >
            Start Date
          </label>
          <DatePicker className="form-control border border-2 border-opacity-50 border-dark shadow-sm m-0 p-1"  id="start-date" onChange={changeStartDate} value={startDate}/>
        </div>

        <fieldset className="border border-dark rounded-3 my-3 p-3 bg-primary bg-opacity-10 shadow-sm">
          <legend className="text-center">
            Adress
          </legend>

          <div className="mb-3">
            <input className="form-control border border-2 border-top-0 border-opacity-50 border-start-0 border-end-0 border-dark shadow-sm" placeholder="Street" type="text" id="street"/>
          </div>

          <div className="mb-3">
            <input className="form-control border border-2 border-top-0 border-opacity-50 border-start-0 border-end-0 border-dark shadow-sm" placeholder="City" type="text" id="city"/>
          </div>

          <div className="mb-3">
          <DropdownPlugin defaultValue={STATE[0]} options={STATE}/>

          </div>

          <div className="mb-3">
            <input className="form-control border border-2 border-top-0 border-opacity-50 border-start-0 border-end-0 border-dark shadow-sm" placeholder="Zipcode" type="number" id="zipcode"/>
          </div>
        </fieldset>

        <div className="mb-3">
        <DropdownPlugin defaultValue={DEPARTMENT[0]} options={DEPARTMENT}/>

        </div>
        <button className="btn btn-primary btn-lg shadow-sm" type="submit">
          Save
        </button>
      </form>

      <ReactModal isOpen={modal.showModal} contentLabel="Employee Created" >
        <p>
          Employee Created !
        </p>
        <button onClick={handleCloseModal}>
          Close Modal
        </button>
      </ReactModal>
    </div>
  )
}
/*        
            <DropdownPlugin defaultValue={STATE[0]} options={STATE}/>

          <DropdownPlugin defaultValue={DEPARTMENT[0]} options={DEPARTMENT}/>

<Dropdown className='form-control border border-2 border-opacity-50 border-dark shadow-sm p-1 m-0' options={DEPARTMENT} onChange={changeDepartment} value={DEPARTMENT[0]} placeholder="Select an option" />  
<Dropdown className='form-control border border-2 border-opacity-50 border-dark shadow-sm p-1 m-0' options={STATE} onChange={changeState} value={STATE[0]} placeholder="Select an option" />
*/

export default CreateEmployeeForm