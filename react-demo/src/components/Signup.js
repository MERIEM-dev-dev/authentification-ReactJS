import React from 'react'
import Form from './Form';

function SignupForm () {
    const handleFormSubmit = (event) => {
        event.preventDefault();
    };
    return (
    <div className="login-box">
        <h1>Sign Up</h1>
        <div className="textbox">
          <i className="fas fa-user" />
          <input type="text" placeholder="Enter Your Name" name="text"/>
        </div>
        <div className="textbox">
          <i className="fad fa-envelope" />
          <input type="text" placeholder="Enter Email" name="email"  />
        </div>
        <div className="textbox">
          <i className="fas fa-lock" />
          <input type="password" placeholder="Enter Password" name="psw"/>
        </div>
        <div className="textbox">
          <i className="fas fa-lock" />
          <input type="password" placeholder="Repeat Password" name="psw-repeat"/>
        </div>
        {/* <button onclick="window.location.href='realisation\Form.js';">Sign Up</button><br/><br/> */}
        {/* <a href="Form." type="text">Already have an account?</a> */}
        <button className="submit" onClick={handleFormSubmit}>Sign up</button>

    </div>

    )
}

export default SignupForm;
