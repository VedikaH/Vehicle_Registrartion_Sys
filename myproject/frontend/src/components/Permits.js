import React, { useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Nav from './Nav';

function Permits(){
  const [adarno,setadarno] = useState('');
  const [newdata,setnewdata]=useState('');

  const clickHandler = async (e) => 
  {      
   try {   
      if(adarno )
      {
        // console.log(formData);
       

        if(adarno.toString().length===12){

        
          
          const res = await axios.post("http://localhost:8080/permits",{
           
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
        setnewdata(res.data.aplypermitt);
        

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
        <center><h2>PERMITS</h2></center>


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
            <th className='tbh' >REGD.OWNER:</th>
            <td>{values.name}</td>     
          </tr>

          <tr>
            <th >VEHICLE NO:</th>
            <td>{values.vehicleno}</td>           
          </tr>
          <tr>
            <th >DATE OF REQUEST:</th>
            <td>{values.dor}</td>           
          </tr>
          <tr>
            <th >ADHAAR NO:</th>
            <td>{values.adarno}</td>           
          </tr>
          <tr>
            <th >PERMIT NUMBER:</th>
            <td>{values.pno}</td>           
          </tr>

          <tr>
            <th >FROM:</th>
            <td>{values.faddr}</td>           
          </tr>

          <tr>
            <th >TO:</th>
            <td>{values.toaddr}</td>
            </tr>
            <tr>
            <th >FROM date :</th>
            <td>{values.frd}</td>           
          </tr>

          <tr>
            <th >TO date:</th>
            <td>{values.tod}</td>
            </tr>

              <tr>
                <th  >status</th>
                <td>{values.status}</td>           
              </tr>
              
        </tbody>
      })
      }
      </Table>   
     
    </div>
    </div>
    )

   

}
export default Permits;
