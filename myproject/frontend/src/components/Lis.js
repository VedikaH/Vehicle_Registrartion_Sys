// import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';
// import logo from '../../src/logo512.png'
import Nav from './Nav';
import React, { useState } from 'react';
import axios from 'axios';


// import logo1 from "../background.png"

function Lis(){
  const [afile,setafile] = useState('');
  const [newdata,setnewdata]=useState('');

  const clickHandler = async (e) => 
  {
      
      
      
      
      
   try {
    
    
      if(afile )
      {
        // console.log(formData);
       

        if(afile.toString().length===12){

        
          
          const res = await axios.post("http://localhost:8080/lis",{
           
            afile:afile,
          
        },
        {
          credentials: "include",
          mode:"cors"
        }
      );
      if(res.data.message==="not valid adhaar number")
          {
              alert("not valid adhaar number");
          }
      else if(res.status===200){
        console.log("succesfully process done");
        setnewdata(res.data.aplylis);
        

      }   
    }
    else{
      alert("enter valid credentials")
    }

      }

  
  }  
      catch(error) {
          console.log("inside catch");
        console.log(" error" +error);
      } finally {
          console.log("in finally");
      }
  }







    return(
      // <div style={image}>
      <div>
        <><Nav/></>
        <div className='container'>
        <center>
        <h1>LICENSE</h1>
        </center>
           
         
         <br/>
            <form>
        <div className="mb-3 ">
            <label htmlFor="formGroupExampleInput" className="form-label formhead h-25">adhaar no.</label>
            <input type="text" onChange={(e) => {setafile(e.target.value)}} className="form-control input-sm w-25 " id="formGroupExampleInput" placeholder="Example input placeholder"/>
            <button type="button" className=" form-control btn btn-primary w-25" onClick={clickHandler} data-bs-target="#exampleModal">
                          SUBMIT
                        </button>
          </div>
          </form>         
          <br/>



                        {/* newdata && newdata.map( (values) => {
                         return {<img>{values.pfile}</img>}
                        }) */}
                       
                   
                     
        <Table striped bordered hover >     
      {
                         newdata && newdata.map( (values) => {
                            return  <tbody>
                              <tr>
                              <th className='tbh'>picture</th>
                              <td><img className='imageinls' src={values.pfile}alt='error'/></td>
                              </tr>
                               

                               
{/*                               

                              <tr>
                              <th>photo</th>
                              <td>{values.pfile}</td> 
                              </tr>
                               */}

                              <tr>
                              <th className='tbh'>license no</th>
                              <td>{values.lisno}</td> 
                              </tr>
                              <tr>
                              <th>name </th>
                              <td >{values.name}</td>
                              </tr>
                              <tr>
                              <th>son/daugther of</th>
                              <td>{values.child}</td>
                              </tr>
                              <tr>
                              <th>adress</th>
                              <td>{values.addr}</td>
                              </tr>
                              <tr>
                              <th>category</th>
                              <td>{values.vehicle}</td>                                                          
                              </tr>
                              <tr>
                              <th>date of birth</th>
                              <td>{values.dob}</td>
                              </tr>
                              {/* <tr>
                              <th>date</th>
                              <td>{values.dor}</td>
                              </tr> */}
                              <tr>
                              <th>adhaar no</th>
                              <td>{values.afile}</td>
                              </tr>
                              <tr>
                              <th>status</th>
                              <td id="butto">{values.status}</td>
                              </tr>
                                
                                
                                
                              
                               
                               
                               
                               
                                </tbody>                   
                         })
                    }
       
        
        
      
    </Table>
   
    </div>
    </div>
    // </div>
          );
        
        
        

    

   

}
export default Lis;
// const image={
//   width: "100%",
//     height: "100vh",
//     background: `url(${logo1})`,
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
// }
