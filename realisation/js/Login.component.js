
class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

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
      <a href="signup.html" type="text">Create an account</a>
    </div>
  );


    }
}