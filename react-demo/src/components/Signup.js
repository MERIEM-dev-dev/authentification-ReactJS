// import React, { useState } from 'react';
import React,{useState} from 'react'
import Form from './Form';
import '../index.css';

function SignupForm () {
  const [values, setValues] = useState ({
  name:"",
  email:"",
  password:"",
  repeat:""
})

    const handleFormSubmit = (event) => {
        event.preventDefault();
        
    };
    return (
    <div className="login-box">
        <h1>Sign Up</h1>
        <div className="textbox">
          <i className="fas fa-user" />
          <input type="text" placeholder="Enter Your Name" name="text" value={values.name}
          onChange={(e)=>{
             setValues({name:e.target.value})
          }
            }/>
        </div>
        <div className="textbox">
          <i className="fad fa-envelope" />
          <input type="text" placeholder="Enter Email" name="email"  value={values.email}
          onChange={(e)=>{
            setValues({email:e.target.value})
         }
        }
          />
        </div>
        <div className="textbox">
          <i className="fas fa-lock" />
          <input type="password" placeholder="Enter Password" name="psw"  value={values.password}
          onChange={(e)=>{
            setValues({password:e.target.value})
         }
        }
          />
        </div>
        <div className="textbox">
          <i className="fas fa-lock" />
          <input type="password" placeholder="Repeat Password" name="psw-repeat"  value={values.repeat} 
          onChange={(e)=>{
            setValues({repeat:e.target.value})
         }}
          />
        </div>
         {/* <button onclick="window.location.href='realisation\Form.js';">Sign Up</button><br/><br/>
         <a href="Form." type="text">Already have an account?</a>  */}
        <button className="submit" onClick={handleFormSubmit}>Sign up</button>

    </div>

    )
}

export default SignupForm;
