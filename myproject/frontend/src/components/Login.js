import logo from "../background.png"
import Greetings from './Greetings';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
function Login(){
    const navigate = useNavigate();
    const [mobile,setMobile] = useState('');
    const [password,setPassword] = useState('');
    
    const clickHandler = async (e) => 
    {
        e.preventDefault();
     try {
        if(password && mobile  )
        {
            console.log("semding");
            const res = await axios.post("http://localhost:8080/login",{
            mobile:mobile,
            password: password,
          },
          {
            credentials: "include",
            mode:"cors"
          }
        );

            if(res.data.message==="user")
            {
            
                console.log("successs")
                navigate("/nav");
            }
            else if(res.data.message==="admin")
            {
                console.log("successs")
                navigate("/nav1");
            }
            else{
                console.log("hgshcg");
                alert(res.data.message);
                navigate("/login");
            }
        }
        else
        {
            alert("invalid input");
        
        }
    }
        catch(error) {
            console.log("inside catch");
          console.log(" error" +error);
        } finally {
            console.log("in finally");
        }
        try{
            const res1 = await axios.post("http://localhost:8080/lis1",{
            mobile:mobile,
            password: password,
          },
          {
            credentials: "include",
            mode:"cors"
          }
        );
        }
        catch(error) {
            console.log("inside catch");
          console.log(" error" +error);
        } finally {
            console.log("in finally");
        }


    }

    return (
        
        <div className='full' style ={HeaderStyle}> 
        <>
        <Greetings/>
        </>
        <div className='container'>
        
        <div className="btnn" onClick={()=>navigate('/signup')} >SignUp </div>
        <form  action="/contact" method="post" className="box">
            <div className="login">
             <h1 className="head">Login</h1>
             <input  type="mobile" name="title"   onChange={(e) => {setMobile(e.target.value)}}  placeholder="Enter your Mobile number"></input>
             <br/>
             <br/>
             <input  type="password" name="password"  onChange={(e) => {setPassword(e.target.value)}}  placeholder="Enter your Password" />
             <br/>
            <br/>
            <div  className="button" onClick={clickHandler} >Login</div>    
         </div> 
         </form>
         </div>
         
         </div>

    )

   

}

export default Login;

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${logo})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // backgroundSize: "auto"
    
};