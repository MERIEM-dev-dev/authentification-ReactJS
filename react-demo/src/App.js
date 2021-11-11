import { React } from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
// import Form from "./components/Form";
import Signup from "./components/Signup";
import { ReactDOM } from 'react-dom';


function App () {
  return (
    <div className="App">
    {/* <Form /> */}
    <Signup />
    <switch>
        <Router path="/react-demo\src\components\Form.js"></Router>
    </switch>
    </div>
  );
}


export default App;
