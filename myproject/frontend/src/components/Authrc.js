import axios from 'axios';
import React, { useState } from 'react';
// import axios from 'axios';
import Nav1 from './Nav1';
function Authrc()
{
  
  const [option,setoption] = useState('');
const [newdata,setnewdata]=useState('');
// const [cache, setCache] = useState("");
const refresh = () => window.location.reload(true)
  const func = async (e) => {
    try{
        const res = await axios.post("http://localhost:8080/authrc",{
              option:option,           
          }, 
          {
            credentials: "include",
            mode:"cors"
          }
        );     
      if(res.status===200){
        console.log(res.data);
          setnewdata(res.data.aplyrec);
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
     axios.post("http://localhost:8080/accept",
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
     axios.post("http://localhost:8080/reject",
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

  };
  return (
    
      <div>
      <><Nav1/></>
        <div className="container">
          
            <h1>RC</h1>
        <div className=" optselect"  onChange={(e) => {setoption(e.target.value)}}>
          <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
            <option defaultValue>Choose option .....</option>
            <option value="1">accepted</option>
            <option value="2">pending</option>
            <option value="3">rejected</option>
           
          </select>
          
        </div>
        <br/>
        <button className="btn btn-primary btnleft"  type="button " onClick={func}>SUBMIT</button>
        
      <br/>



      






        <table className="table table-striped">
          
            <thead>
              <tr>
                <th scope="col">NAME</th>
                <th scope="col">ADHAAR</th>
                <th scope="col">ADDRESS</th>
                <th scope="col">VEHICLE CLASS NAME</th>
                <th scope="col">FUEL</th>
                <th scope="col">COLOR</th>
                <th scope="col">ENGINE NUMBER</th>
                <th scope="col">VNO</th>
                <th scope="col">STATUS</th>
                
                <th scope="col"><pre> ACCEPT    /    REJECT</pre></th>


               
              </tr>
            </thead>
            <tbody id='tabl'>
            {
                         newdata && newdata.map( (values,i) => {
                            return  <tr key={i}>
                                <td >{values.name}</td>
                                <td>{values.adarno}</td>         
                                <td>{values.addr}</td>
                                <td>{values.classname}</td>
                                <td>{values.fuel}</td>
                                <td>{values.color}</td>
                                <td>{values.engno}</td>
                                <td>{values.vno}</td>
                                <td id="butto">{values.status}</td>
                                <td><button   className='btn btn-primary'
                                 onClick={() => clickHandler(i)}
                                >accept</button> or
                                <button   className='btn btn-primary'
                                 onClick={() => clickHandlerx(i)}
                                >reject</button></td>
                                 </tr>                   
                         })
                    }
            </tbody>         
        </table>
        </div>
        </div>
    )
}
export default Authrc;
