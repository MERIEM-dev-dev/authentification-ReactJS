import React, { useState } from 'react';
import React from 'react'
import Form from './Form';
import '../index.css';

function SignupForm () {
  const [value, setValues] = useState ({
  name:"",
  email:"",
  password:""
})
    const handleFormSubmit = (event) => {
        event.preventDefault();
    };
    return (
    <div className="login-box">
        <h1>Sign Up</h1>
        <div className="textbox">
          <i className="fas fa-user" />
          <input type="text" placeholder="Enter Your Name" name="text" value={values.name}/>
        </div>
        <div className="textbox">
          <i className="fad fa-envelope" />
          <input type="text" placeholder="Enter Email" name="email"  value={values.email}/>
        </div>
        <div className="textbox">
          <i className="fas fa-lock" />
          <input type="password" placeholder="Enter Password" name="psw"  value={values.password}/>
        </div>
        <div className="textbox">
          <i className="fas fa-lock" />
          <input type="password" placeholder="Repeat Password" name="psw-repeat"  value={values.password}}/>
        </div>
        {/* <button onclick="window.location.href='realisation\Form.js';">Sign Up</button><br/><br/> */}
        {/* <a href="Form." type="text">Already have an account?</a> */}
        <button className="submit" onClick={handleFormSubmit}>Sign up</button>

    </div>

    )
}

export default SignupForm;
