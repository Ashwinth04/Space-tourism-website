import React, { useState } from 'react';
import Bar from '../Bar/Bar';
import "./Technology.css";

function Technology() {
  
  const [vehicle,setVehicle] = useState("LAUNCH VEHICLE");
  const [content,setContent] = useState("A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!");
  const [vehicleImg,setVehicleImg] = useState("launch-vehicle");

  function launchVehicle(){
      setVehicle("LAUNCH VEHICLE");
      setContent("A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!");
      setVehicleImg("launch-vehicle");
  }

  function spaceport(){
      setVehicle("SPACEPORT");
      setContent("A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.");
      setVehicleImg("spaceport");
  }

  function spaceCapsule(){
      setVehicle("SPACE CAPSULE");
      setContent("A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.");
      setVehicleImg("space-capsule");
  }

  const activeStyle = {
    backgroundColor:"white",
    color:"black"
  }

  return (
    <div>
      <div class="bgimgt">
        <Bar/>
        <hr class="denote technology"/>
        <img class="tech-img" src={require("./image-"+vehicleImg+"-portrait.jpg")} alt=""/>
        <div class="tech-heading">
          <span class="num">03</span>Space launch 101
        </div>
        <div onClick={launchVehicle} style={vehicle==="LAUNCH VEHICLE"?activeStyle:null} class="hover-numbers one">
          1
        </div>
        <div onClick={spaceport} style={vehicle==="SPACEPORT"?activeStyle:null} class="hover-numbers two">
          2
        </div>
        <div onClick={spaceCapsule} style={vehicle==="SPACE CAPSULE"?activeStyle:null} class="hover-numbers three">
          3
        </div>
        <div class="tech-content">
            <span class="terminology" >THE TERMINOLOGY...</span>
            <span class="object" >{vehicle}</span>
            <p class="contentt">{content}</p>

        </div>

      </div>
    </div>
  )
}

export default Technology;
