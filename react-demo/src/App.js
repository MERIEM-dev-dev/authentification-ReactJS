import { React } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
// import Form from "./components/Form";
import Signup from "./components/Signup";



function App () {
  return (
    <div className="App">
    {/* <Form /> */}
    <Signup />

    <BrowserRouter>
<Route   path="/Signup" component={<Signup />}/>
{/* <Route  path="/reg" component={Register}/>
<Route  path="/logout" component={Logout}/>
<Route  path="/session" component={Session}/> */}
</BrowserRouter>
    </div>
  );
}



export default App;
