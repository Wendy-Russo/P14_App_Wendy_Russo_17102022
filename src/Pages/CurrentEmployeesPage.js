import Header from "../Components/Header"
import MuiTable from "../Components/MuiTable"
import React  from 'react';

function CurrentEmployeesPage({users}){

    return(


      <div className="App bg-light ">
        <Header active={"view"}/>
        <main>
          <div className="row justify-content-center bg-light">
            <div className="col col-xl-8 col-md-10 col-11 m-0  mt-5">
              <MuiTable users={users} />
            </div>
          </div>
        </main>
      </div>
    )
}

export default CurrentEmployeesPage
