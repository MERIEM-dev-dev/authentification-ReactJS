import { React } from 'react';
import './App.css';
import { Router, Route, Routes } from "react-router-dom";
// import Form from "./components/Form";
import Data from 'data.json' ;
import Signup from "./components/Signup";



function App () {
  return  ( 
    <div className="App">
        <div className="posts">
        { Data.map(post => {
          return (
            <div key={  post.id  }>
               <h4>{  post.title  }</h4>
               <p>{  post.content  }</p>
            </div>
          )
        }) }
       
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
   </div>
  );
}



export default App;
