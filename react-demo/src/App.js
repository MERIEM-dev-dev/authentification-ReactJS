import { React } from 'react';
import './App.css';
import { Router, Switch, Route } from "react-router-dom";
// import Form from "./components/Form";
import Signup from "./components/Signup";



function App () {
  return (
    <div className="App">
    {/* <Form /> */}
    <Signup />
    <Router>
    <Routes>
      <Route path="/Signup" element ={<Signup />}/>
{/* <Route  path="/reg" component={Register}/>
<Route  path="/logout" component={Logout}/>
<Route  path="/session" component={Session}/> */}
</Routes>
</Router>
    </div>
  );
}



export default App;
