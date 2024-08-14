import React from 'react';
import logo from"../home.png";
import Greetings from './Greetings';
import { useNavigate } from "react-router-dom";
function Nav(){
  const navigate = useNavigate();
    return (
      <div>
        <><Greetings/></>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="nav"><img
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
                    <a className="nav-link " href='lis'>LICENSE</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="rc">RC</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="permits">PERMITS</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="applylis">APPLY LICENSE</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="applyrc">APPLY RC</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="applypermits">APPLY PERMITS</a>
                  </li>  
                  <li className="nav-item ">
                    
                    <button className="btn btn-outline-danger" onClick={()=>navigate('/')} type="submit">Logout</button>
                  </li>              
             

            </ul>
          </div>
        </div>
      </nav>
      </div>

    )

   

}
export default Nav;
