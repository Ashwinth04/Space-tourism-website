import React from 'react';
import "./Bar.css";
import { Link } from 'react-router-dom';

function Bar() {
  
 
  
  return (
    <div>
         <br/>
  <div class="non">


  <img class="logo" src="./assets/shared/logo.svg" alt=""/>
  <hr/>
  <div class="navbar">
    <span class="som all">
      <span class = "navthings all"><Link to="/"><b>00</b>Home</Link></span>
      <span class = "navthings all"><Link to="/destination"><b>01</b>Destination</Link></span>
      <span class = "navthings all"><Link to="/crew"><b>02</b>Crew</Link></span>
      <span class = "navthings all"><Link to="/technology"><b>03</b>Technology</Link></span>
    </span>
  </div>
  
  
  
  
  </div>
    </div>
  )
}

export default Bar
