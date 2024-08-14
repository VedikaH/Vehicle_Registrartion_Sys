// import React from 'react';
import Nav from './Nav';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Applypermit(){
  const navigate=useNavigate();
  const [name,setname] = useState('');
  const [vehicleno,setvehicleno] = useState('');
  const [faddr,setfaddr] = useState('');
  const [toaddr,settoaddr] = useState('');
  const [adarno,setadarno] = useState('');
  const [dor,setdor] = useState('');
  const [frd,setfrd] = useState('');
  const [tod,settod] = useState('');
  const vehiclevalid = (NUMBERPLATE) => {
     
     
      let regex = new RegExp(/^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/);
      if (NUMBERPLATE === null) {
          return false;
      }
  
      
      if (regex.test(NUMBERPLATE) === true) {

          return true;
      }
      else {
          return false;
      }
  }
    


  const clickHandler = async (e) => 
    {
        
     try {
    
      
        if(name && faddr  && toaddr && vehicleno && dor &&adarno &&frd&&tod)
        {
          
    

          if(adarno.toString().length===12 && vehiclevalid(vehicleno)){

          
            
            const res = await axios.post("http://localhost:8080/applypermits",{
              name:name,
              faddr:faddr,
              vehicleno:vehicleno,
              dor:dor,
              adarno:adarno,
              toaddr:toaddr,
              frd:frd,
              tod:tod

          },
          {
            credentials: "include",
            mode:"cors"
          }
        );
        if(res.data.message==="User already exists")
        {
            alert("User doesnot  exists");
        }
        else if(res.data.message==="rc pending")
        {
          alert("rc pending");
        }
        else if(res.status===200){
          alert("succesfully process done");
          navigate("/nav")
        }   
      }
      else{
        alert("enter valid credentials")
      }

        }

        else
        {
            alert("enter all fields");
        
        }
    }  
        catch(error) {
            console.log("inside catch");
          console.log(" error" +error);
        } finally {
            console.log("in finally");
        }
    }













    return (
      <div>
<><Nav/></>
    <div className='container'>
       
    <h2 >APPLY PERMIT</h2>
    <form>
      <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label formhead">REGD. OWNER</label>
          <input type="text" className="form-control" onChange={(e) => {setname(e.target.value)}} id="formGroupExampleInput" placeholder="Example input placeholder"/>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label formhead">VEHICLE NUMBER</label>
          <input type="text" className="form-control" onChange={(e) => {setvehicleno(e.target.value)}} id="formGroupExampleInput" placeholder="Example input placeholder"/>
        </div>


        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label formhead">FROM ADDRESS</label>
          <input type="text" className="form-control" onChange={(e) => {setfaddr(e.target.value)}} id="formGroupExampleInput" placeholder="Example input placeholder"/>
        </div>

        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label formhead">TO ADDRESS</label>
          <input type="text" className="form-control" onChange={(e) => {settoaddr(e.target.value)}} id="formGroupExampleInput" placeholder="Example input placeholder"/>
        </div>

        <div className="mb-3">
          <label htmlFor="formFile" className="form-label formhead">ADHAAR FILE</label>
          <input className="form-control" onChange={(e) => {setadarno(e.target.value)}} type="text" id="formFile"/>
        </div>

        <div action="/action_page.php" onChange={(e) => {setdor(e.target.value)}} className='btnleft'>
            <label htmlFor="birthday">DATE OF REQUEST</label>
            <input type="date" id="birthday" name="birthday"/>
            </div>

            <div action="/action_page.php" onChange={(e) => {setfrd(e.target.value)}} className='btnleft'>
            <label htmlFor="birthday">FROM DATE </label>
            <input type="date" id="birthday" name="birthday"/>
            </div>

            <div action="/action_page.php" onChange={(e) => {settod(e.target.value)}} className='btnleft'>
            <label htmlFor="birthday">TO DATE </label>
            <input type="date" id="birthday" name="birthday"/>
            </div>
        
        <br/>

      
      
    </form>
    <br/>
    <br/>
    <br/>
    <center>
        <button type="button" onClick={clickHandler} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          SUBMIT
                        </button>
        </center>
       
        
  </div>
  <br/>
    <br/>   
  </div>    
    )








   

}
export default Applypermit;
