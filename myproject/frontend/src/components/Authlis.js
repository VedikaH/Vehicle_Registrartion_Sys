// import React from 'react';
import axios from 'axios';
import React, { useState } from 'react';
import Nav1 from './Nav1';
function Authlis(){

  const [option,setoption] = useState('');
  const [newdata,setnewdata]=useState('');
  // const [cache, setCache] = useState("");
  const refresh = () => window.location.reload(true)

  


    const func = async (e) => {
      try{
          const res = await axios.post("http://localhost:8080/authlis",{
                option:option,           
            }, 
            {
              credentials: "include",
              mode:"cors"
            }
          );     
        if(res.status===200){
          console.log(res.data);
            setnewdata(res.data.aplylis);
            // refresh()

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
       axios.post("http://localhost:8080/acceptlis",
                      newdata[index])
    }
    
    catch(error) {
      console.log("inside catch");
    console.log(" error" +error);
  } finally {
      console.log("in finally");
      alert("succesfully accepted");
      refresh();
      
  }
  
    };

    const clickHandlerx= (index) => {
      try{
       axios.post("http://localhost:8080/rejectlis",
                      newdata[index])
    }
    
    catch(error) {
      console.log("inside catch");
    console.log(" error" +error);
  } finally {
      console.log("in finally");
      alert("successfully rejected");
      refresh()
  }
    }  








    return (
      <div>
      <><Nav1/></>
        <div className="container">
          
            <h1>LICENSE</h1>
            <br/>
      <div className='optselect'onChange={(e) => {setoption(e.target.value)}} >
       
        <select className="form-select " id="floatingSelect" aria-label="Floating label select example">
        <option defaultValue>Choose option....</option>
          <option value="1">accepted</option>
          <option value="2">pending</option>
          <option value="3">rejected</option>
        </select>
        
      </div>
      <br/>
      <button className="btn btn-primary btnleft"  type="button" onClick={func}>SUBMIT</button>
      
      
      <div className="container-xxl">

       
          <table className="table table-striped">
            
              <thead>
                <tr>
                  
                  <th scope="col">LICENSE NO</th>
                  <th scope="col">FULL NAME</th>
                  <th scope="col">S/O OF</th>
                  <th scope="col">ADDRESS</th>
                  <th scope="col">CATEGORY</th>
                  <th scope="col">DATE OF BIRTH</th>
                  <th scope="col">DATE OF REQUEST</th>
                  <th scope="col">ADHAR NO.</th>
                  <th scope="col">STATUS</th>
                  <th scope="col"><pre> ACCEPT    /    REJECT</pre></th>
                </tr>
              </thead>
              <tbody>
                
                {
                         newdata && newdata.map( (values,i) => {
                            return  <tr key={i}>
                                <td>{values.lisno}</td> 
                                <td >{values.name}</td>
                                <td>{values.child}</td>
                                <td>{values.addr}</td>
                                <td>{values.vehicle}</td>                                                          
                                <td>{values.dob}</td>
                                <td>{values.dor}</td>
                                <td>{values.afile}</td>
                                <td id="butto">{values.status}</td>
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
</div>
    )

   

}
export default Authlis;
