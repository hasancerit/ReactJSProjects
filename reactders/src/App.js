import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Users from './components/Users';

class App extends Component{
  constructor(probs){
    super(probs);
    this.state = {
      users : [
        {
          key:1,name : "Hasan",surname:"Cerit",aciklama : "JS"
        },
        {
          key:2, name : "Onur Ekin",surname:"Gün",aciklama : "SAP"
        },
        {
          key:3,name : "Göktuğ",surname:"Kirve Spor",aciklama : "Ne düyün nan dayı"
        },
        {
          key:4,name:"",surname:"",aciklama:""
        }
      ]
    } 
  }

  render (){
    return(
    <div className= "container">
      <Navbar title = "Hello React"></Navbar>
      <Users users = {this.state.users}></Users>
    </div>
    )
  }
}

export default App;
