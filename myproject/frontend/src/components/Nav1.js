import React from 'react';
import logo from"../home.png";
import { useNavigate } from "react-router-dom";

function Nav1(){
  const navigate = useNavigate();
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="nav1"><img
              src={logo}
              width="45"
              height="45"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"/></a> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link " href="authlis">LICENSE</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="authrc">RC</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="authper">PERMITS</a>
                  </li>              
              {/* <li className="nav-item">
                <a className="nav-link " href="report">REPORT</a>
              </li> */}
              <li className="nav-item ">
                    
                    <button className="btn btn-outline-danger logout" onClick={()=>navigate('/')} type="submit">Logout</button>
                  </li>  

            </ul>
          </div>
        </div>
      </nav>
      </div>
    
    )

   

}
export default Nav1;
