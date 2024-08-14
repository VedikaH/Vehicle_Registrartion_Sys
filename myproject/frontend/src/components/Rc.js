import React, { useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';
// import logo from '../../src/logo192.png'
import Nav from './Nav';


function Rc(){




  const [adarno,setadarno] = useState('');
  const [newdata,setnewdata]=useState('');

  const clickHandler = async (e) => 
  {
      
      
      
      
      
   try {
    
    
      if(adarno )
      {
        // console.log(formData);
       

        if(adarno.toString().length===12){

        
          
          const res = await axios.post("http://localhost:8080/rc",{
           
            adarno:adarno,
          
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
        setnewdata(res.data.aplyrec);
        

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










    return (
      <div>
      <><Nav/></>
        <div className='container'>
          
             {/* <center>
              <h1>RC</h1>
                <img className='picinuser' src={logo} alt="no img"></img>
            </center> */}

        <form>
        <div className="mb-3 ">
            <label htmlFor="formGroupExampleInput" className="form-label formhead h-25">adhaar no.</label>
            <input type="text" onChange={(e) => {setadarno(e.target.value)}} className="form-control input-sm w-25 " id="formGroupExampleInput" placeholder="Example input placeholder"/>
            <button type="button" className=" form-control btn btn-primary w-25" onClick={clickHandler} data-bs-target="#exampleModal">
                          SUBMIT
                        </button>
          </div>
          </form>



        <Table striped bordered hover>
       {
        newdata && newdata.map( (values) => {
          return  <tbody>
         <tr>
         <th className='tbh'>picture</th>
        <td><img className='imageinls' src={values.pfile}alt='error'/></td>
          </tr>

          <tr>
            <th >REGD.OWNER</th>
            <td>{values.name}</td>           
          </tr>

          <tr>
            <th >VEHICLE NO</th>
            <td>{values.vno}</td>           
          </tr>

          <tr>
            <th >ADDRESS</th>
            <td>{values.addr}</td>
            </tr>

            <tr>
                <th >MARKERS CLASS</th>
                <td>{values.classname}</td>           
              </tr>

              <tr>
                <th >FUEL USED</th>
                <td>{values.fuel}</td>           
              </tr>

              <tr>
                <th >VEHICLE COLOUR</th>
                <td>{values.color}</td>           
              </tr>

              <tr>
                <th >VEHICLE CLASS</th>
                <td>{values.classname}</td>           
              </tr>

              <tr>
                <th >engine number</th>
                <td>{values.engno}</td>           
              </tr>

              <tr>
                <th >adarno</th>
                <td>{values.adarno}</td>           
              </tr>

              <tr>
                <th>status</th>
                <td>{values.status}</td>           
              </tr>

<br/>
<br/>
<br/>
<br/>

             
        </tbody>
        })
}
      </Table> 
      {/* <center>
        <a className="btn btn-primary" href="no" role="button">DOWNLOAD</a>
      </center> */}
      </div>  
      </div>
    )

   

}
export default Rc;


