// import React from 'react';
import Nav from './Nav';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



function Applyrc(){

const navigate=useNavigate();
  const [name,setname] = useState('');
  const [addr,setaddr] = useState('');
  const [classname,setclassname] = useState('');
  const [color,setcolor] = useState('');
  const [engno,setengno] = useState('');
  const [fuel,setfuel] = useState('');
  const [adarno,setadarno] = useState();
  const [pfile,setpfile] = useState();
  
function handleImage(e){
  console.log(e);
  var reader=new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload=()=>{
    console.log(reader.result);
    setpfile(reader.result)
  };
  reader.onerror=error =>{
    console.log("error",error)
  };
  
  
}

  const clickHandler = async (e) => 
    {

      
          // pfile.name
     try {
        if(name && addr  && classname  && color &&adarno && engno&&fuel&&pfile )
        {
          if(adarno.toString().length===12 &&11<=engno.toString().length<=17){
            const res = await axios.post("http://localhost:8080/applyrc",{
              name:name,
              addr:addr,
              classname:classname,
              color:color,
              engno:engno,
              fuel:fuel,
              adarno:adarno,
              pfile:pfile,
              
          },
          {
            credentials: "include",
            mode:"cors"
          }
        );
        if(res.data.message==="User already exists")
        {
            alert("User   exists");
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
            
          console.log(" error" +error);
        } finally {
            console.log("in finally");
        }
    }



















    return (
      <div>
      <><Nav/></>
        <div className='container'>
          
        <h2 >APPLY VEHICLE REGISTRATION</h2>
      <form>
        <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label formhead">REGD.OWNER</label>
            <input type="text" onChange={(e) => {setname(e.target.value)}} className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label formhead">ADDRESS</label>
            <input type="text" className="form-control"  onChange={(e) => {setaddr(e.target.value)}} id="formGroupExampleInput" placeholder="Example input placeholder"/>
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput"  className="form-label formhead">MARKERS className</label>
            <input type="text" className="form-control" onChange={(e) => {setclassname(e.target.value)}} id="formGroupExampleInput" placeholder="Example input placeholder"/>
          </div>

          <div className="form-floating"onChange={(e) => {setfuel(e.target.value)}}>
            <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
              <option defaultValue>NONE</option>
              <option value="1">PETROL</option>
              <option value="2">DIESEL</option>
              <option value="3">ELECTRIC</option>
              <option value="4">CNG</option>
            </select>
            <label htmlFor="floatingSelect" className='formhead'>SELECT FUEL</label>
          </div>
          <br/>

          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label formhead">VEHICLE COLOUR</label>
            <input type="text" className="form-control" onChange={(e) => {setcolor(e.target.value)}} id="formGroupExampleInput" placeholder="Example input placeholder"/>
          </div>

          <div className="mb-3">
            <label htmlFor="formFile" className="form-label formhead">ADHAAR NUMBER</label>
            <input className="form-control" onChange={(e) => {setadarno(e.target.value)}} type="text" id="formFile"/>
          </div>

          <div className="mb-3">
            <label htmlFor="formFile" className="form-label formhead">IMAGE FILE</label>
            <input className="form-control" onChange={handleImage} type="file" id="formFile" accept=".jpeg, .png, .jpg"/>
          </div>

          
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label formhead">ENGINE NUMBER</label>
            <input type="text" className="form-control" onChange={(e) => {setengno(e.target.value)}} id="formGroupExampleInput" placeholder="Example input placeholder"/>
          </div> 
          
  
        
        
      </form>
      <center>
        <button type="button" onClick={clickHandler} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          SUBMIT
                        </button>
        </center>
        {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">DATA</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            ...
                          </div>
                          <div className="modal-footer"> 
                           
                            <button type="button" className="btn btn-danger">CANCEL</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">HOME</button>
                          </div>
                        </div>
                      </div>
                    </div>
         */}

    </div>
    <br/>
    <br/>
    <br/>
    </div>
    )


   

}
export default Applyrc;

