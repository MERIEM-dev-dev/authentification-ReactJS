import { React } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
// import Form from "./components/Form";
import Signup from "./components/Signup";
import { ReactDOM } from 'react-dom';


function App () {
  return (
    <div className="App">
    {/* <Form /> */}
    <Signup />
    </div>
  );
}

export default App;
