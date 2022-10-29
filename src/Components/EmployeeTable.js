import Table from "rc-table";
import { useState } from "react";
import React from 'react';

function EmployeeTable(){

    const columns = [
        {
          title: 'First Name',
          dataIndex: 'FirstName',
          key: 'FirstName',
          width: 200,
        },
        {
          title: 'Last Name',
          dataIndex: 'LastName',
          key: 'LastName',
          width: 200,
        },
        {
          title: 'Date of Birth',
          dataIndex: 'BirthDate',
          key: 'BirthDate',
          width: 200,
        },
        {
          title: 'Start Date',
          dataIndex: 'StartDate',
          key: 'StartDate',
          width: 200,
        },
        {
          title: 'Street',
          dataIndex: 'Street',
          key: 'Street',
          width: 200,
        },
        {
          title: 'City',
          dataIndex: 'City',
          key: 'City',
          width: 200,
        },
        {
          title: 'State',
          dataIndex: 'State',
          key: 'State',
          width: 200,
        },
        {
          title: 'Department',
          dataIndex: 'Department',
          key: 'Department',
          width: 200,
        },
    ];
    
    const USER = [{
      FirstName: "A",
      LastName: "B",
      BirthDate: "1",
      StartDate: "1",
      Street: "1",
      City: "1",
      State: "1",
      Department: "1",
      key :"1"
    },
    {
      FirstName: "A",
      LastName: "B",
      BirthDate: "2",
      StartDate: "2",
      Street: "2",
      City: "2",
      State: "2",
      Department: "2",
      key :"2"
    },
    {
      FirstName: "A",
      LastName: "B",
      BirthDate: "3",
      StartDate: "3",
      Street: "3",
      City: "3",
      State: "3",
      Department: "3",
      key :"3"
    },
    {
      FirstName: "A",
      LastName: "B",
      BirthDate: "4",
      StartDate: "4",
      Street: "4",
      City: "4",
      State: "4",
      Department: "4",
      key :"4"
    },
    {
      FirstName: "A",
      LastName: "B",
      BirthDate: "5",
      StartDate: "5",
      Street: "5",
      City: "5",
      State: "5",
      Department: "5",
      key :"5"
    },
    {
      FirstName: "A",
      LastName: "B",
      BirthDate: "6",
      StartDate: "6",
      Street: "6",
      City: "6",
      State: "6",
      Department: "6",
      key :"6"
    },
    {
      FirstName: "A",
      LastName: "B",
      BirthDate: "7",
      StartDate: "7",
      Street: "7",
      City: "7",
      State: "7",
      Department: "7",
      key :"7"
    },
    {
      FirstName: "A",
      LastName: "B",
      BirthDate: "8",
      StartDate: "8",
      Street: "8",
      City: "8",
      State: "8",
      Department: "8",
      key :"8"
    },
    {
      FirstName: "A",
      LastName: "B",
      BirthDate: "9",
      StartDate: "9",
      Street: "9",
      City: "9",
      State: "9",
      Department: "9",
      key :"9"
    },
    {
      FirstName: "A",
      LastName: "B",
      BirthDate: "10",
      StartDate: "10",
      Street: "10",
      City: "10",
      State: "10",
      Department: "10",
      key :"10"
    },]


    const [currentPage,setCurrentPage] = useState(1);
    const [usersPerPage,setUsersPerPage] = useState(5);

    const USER_NUMBER = USER.length;
    const PAGES_NUMBER = Math.ceil(USER_NUMBER/usersPerPage);

    let usersSplit = [];



    function decreasePage(){
      const NEW_PAGE = Math.max(0,currentPage-1);
      setCurrentPage(NEW_PAGE)
    }

    function increasePage(){
      const NEW_PAGE = Math.min(PAGES_NUMBER,currentPage+1);
      setCurrentPage(NEW_PAGE)
    }

    function updateUsersPerPage(e){
      setUsersPerPage(e.target.value);
    }

    function isInPage(user,page,usersPerPage,maxUsers){

      const PAST_USERS = ((Math.max(0,page-1))*usersPerPage);
      
      if((user > PAST_USERS) && (user <= (PAST_USERS+usersPerPage)) && (user <= maxUsers)){
        console.log(PAST_USERS)
        return true
      }
      return false;
    }

    const USERS_THIS_PAGE = USER.filter((elem,id) => isInPage(id+1,currentPage,usersPerPage,USER_NUMBER));

    console.log(isInPage(10,4,3,10))

    return(
      <div>
        <Table className="my-3" columns={columns} data={USERS_THIS_PAGE} />
        <div>
          <button onClick={decreasePage}>
            prev
          </button>
          <span>
            Page {currentPage} of {PAGES_NUMBER}
          </span>
          <button onClick={increasePage}>
            next
          </button>
        </div>
        <input onChange={(e) => updateUsersPerPage(e)} placeholder="Employees per page" type='number' />
      </div>
      
    )
}

export default EmployeeTable