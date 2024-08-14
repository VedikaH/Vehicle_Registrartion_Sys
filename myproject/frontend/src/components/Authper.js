// 
import axios from 'axios';
import React, { useState } from 'react';

import Nav1 from './Nav1';
function Authper(){
  const [option,setoption] = useState('');
  const [newdata,setnewdata]=useState('');
  // const [cache, setCache] = useState("");
  const refresh = () => window.location.reload(true)
    const func = async (e) => {
      try{
          const res = await axios.post("http://localhost:8080/authpermits",{
                option:option,           
            }, 
            {
              credentials: "include",
              mode:"cors"
            }
          );     
        if(res.status===200){
          console.log(res.data);
            setnewdata(res.data.aplypermitt);
      }    
      }
      catch(error) {
        console.log("inside catch");
      console.log(" error" +error);
    } finally {
        console.log("in finally");
    }
    }
    
     
    
    const clickHandler = (index) => {
      try{
       axios.post("http://localhost:8080/acceptper",
                      newdata[index])
    }
    
    catch(error) {
      console.log("inside catch");
    console.log(" error" +error);
  } finally {
      console.log("in finally");
      alert("succesfully accepted");
      refresh()
  }
  
    };

    const clickHandlerx= (index) => {
      try{
       axios.post("http://localhost:8080/rejectper",
                      newdata[index])
    }
    
    catch(error) {
      console.log("inside catch");
    console.log(" error" +error);
  } finally {
      console.log("in finally");
      alert("succesfully rejected");
    refresh()
  }
    }  











    return (
      <div>
      <><Nav1/></>
        <div className="container">
          
            <h1>permits</h1>
        <div className=" optselect" onChange={(e) => {setoption(e.target.value)}} >
          <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
            <option defaultValue>Choose Option...</option>
            <option value="1">accepted</option>
            <option value="2">pending</option>
            <option value="3">rejected</option>
           
          </select>

         
        </div>
        <br/>
        
        <button className="btn btn-primary btnleft"  onClick={func} type="button">SUBMIT</button>
        

    
        
          <table className="table table-striped">
            
              <thead>
                <tr>
                  
                  <th scope="col">REGD OWNER</th>
                  <th scope="col">VEHICLE NUMBER</th>
                  <th scope="col">FROM</th>
                  <th scope="col">TO</th>
                  <th scope="col">ADHAAR NO.</th>
                  <th scope="col">DATE OF REQUEST</th>
                  <th scope="col">FROM DATE</th>
                  <th scope="col">TO DATE</th>
                  <th scope="col">STATUS</th>
                  <th scope="col"><pre> ACCEPT    /    REJECT</pre></th>
                </tr>
              </thead>
              <tbody>
              {
                         newdata && newdata.map( (values,i) => {
                            return  <tr key={i}>
                                
                                <td >{values.name}</td>
                                <td>{values.vehicleno}</td>
                                <td>{values.faddr}</td>
                                <td>{values.toaddr}</td>
                                <td>{values.adarno}</td>    
                                <td>{values.dor}</td>    
                                <td>{values.frd}</td>    
                                <td>{values.tod}</td>    

                                <td>{values.status}</td>    
                                                                                                                                                                               
                                <td>
                                    <button   className='btn btn-primary'
                                  onClick={() => clickHandler(i)}
                                  >accept</button> or 
                                  <button   className='btn btn-primary'
                                  onClick={() => clickHandlerx(i)}
                                  >reject</button>
                                </td>
                                 </tr>                   
                         })
                    }
                  
                
                
                
              </tbody>
            </table>
          
        </div>
        </div>
    )

   

}
export default Authper;
