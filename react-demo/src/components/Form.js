import React from 'react';
import Signup from './Signup';


const Form = () => {
    return (
        <div className="login-box">
      <h1>Login</h1>
      <div className="textbox">
        <i className="fas fa-user" />
        <input type="text" placeholder="Username"  />
      </div>
      <div className="textbox">
        <i className="fas fa-lock" />
        <input type="password" placeholder="Password"  />
      </div>
      {/* <a href="Home.html" type="submit">Log in</a><br><br> */}
      <button onclick="window.location.href='Home.html';">Login</button><br /><br />
      <a href="index.html" type="text">Create an account</a>
    </div>
    );
};

export default Form;
