import React from 'react';
import './App.css';
import Kisi from './components/Kisi'; 
import Navbar from './components/Navbar';

function App() {
  return (
    <div className= "container">
      <Navbar title = "Hello React"></Navbar>
      <Kisi  name = "Hasan" surname = "Cerit"></Kisi>
      <Kisi  name = "Onur" surname = "Gün"></Kisi>
      <Kisi>      </Kisi>

    </div>
  );
}

export default App;
