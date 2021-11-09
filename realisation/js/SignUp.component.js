class SignUp extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
     
        return (

<div className="login-box">
        <h1>Sign Up</h1>
        <div className="textbox">
          <i className="fas fa-user" />
          <input type="text" placeholder="Enter Your Name" name="text" defaultValue />
        </div>
        <div className="textbox">
          <i className="fad fa-envelope" />
          <input type="text" placeholder="Enter Email" name="email" defaultValue />
        </div>
        <div className="textbox">
          <i className="fas fa-lock" />
          <input type="password" placeholder="Enter Password" name="psw" defaultValue />
        </div>
        <div className="textbox">
          <i className="fas fa-lock" />
          <input type="password" placeholder="Repeat Password" name="psw-repeat" defaultValue />
        </div>
        <button onclick="window.location.href='Login.component.js';">Sign Up</button><br /><br />
        <a href="../login.html" type="text">Already have an account?</a>
      </div>
         
         


        )
    }
}