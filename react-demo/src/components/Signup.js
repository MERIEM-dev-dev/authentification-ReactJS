import React from 'react'

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
        <button onclick= {handleFormSubmit}>Sign Up</button><br/><br/>
        <a href="login.html" type="text">Already have an account?</a>
    </div>

    )
}

export default SignupForm;
