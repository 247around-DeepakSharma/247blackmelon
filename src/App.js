import React from "react";
import Home from "./Componets/Home";
import Contact from "./Componets/Contact";
import About from "./Componets/About";
import Service from "./Componets/Service";
import Navbar from "./Componets/Navbar";
import Login from "./Componets/LogIn";
import  Register from "./Componets/Register";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {
  Redirect,
  Route,
  Switch
 
} from "react-router-dom";
const App =()=> {
  return (
    <>
  
    <Switch>
    <Route exact path ="/login" component={Login}/>
    <Route exact path = "/register" component ={Register}/>
    <Navbar/>
      <Route exact path = "/" component ={Home}/>
      <Route exact path = "/about" component ={About}/>
      <Route exact path = "/service" component ={Service}/>
      <Route exact path = "/contact" component ={Contact}/>
      
      
      <Redirect to ="/"/>
    </Switch>
    
    </>
  );
}

export default App;
