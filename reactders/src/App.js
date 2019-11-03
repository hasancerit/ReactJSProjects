import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Users from './components/Users';
import AddUser from './components/AddUser';
import {BrowserRouter as Router,Route} from "react-router-dom";

class App extends Component{
  render(){
    return(
     <Router>
        <div className= "container">
              <Navbar title = "Hello React"></Navbar>
              <hr/>
              <Route exact path="/" component = {Users} />
              <Route exact path="/ekle" component = {AddUser} />
        </div>
    </Router>
    )
  }
} 

export default App;
