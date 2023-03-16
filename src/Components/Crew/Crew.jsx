import React, { useState } from 'react';
import Bar from '../Bar/Bar';
import "./Crew.css";

function Crew() {
  
  const [position,setPosition] = useState("COMMANDER");
  const [name,setName] = useState("DOUGLAS HURLEY");
  const [accom,setAccom] = useState("Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.");
  const [memImg,setMemImg] = useState("douglas-hurley");

  const dotStyle = {
    backgroundColor:"white"
  }
  
  function commander(){
    setPosition("COMMANDER");
    setName("DOUGLAS HURLEY");
    setAccom("Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.");
    setMemImg("douglas-hurley");

  }
  
  function specialist(){
    setPosition("MISSION SPECIALIST");
    setName("MARK SHUTTLEWORTH");
    setAccom(" Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.");
    setMemImg("mark-shuttleworth");
  }

  function pilot(){
    setPosition("PILOT");
    setName("VICTOR GLOVER");
    setAccom("Pilot on the first operational flight of the SpaceX crew Dragon to the International Space Station.Glover is a commander in the US Navy where he pilots an F/A-18.He was a crew member of Expedition 64 , and served as a station systems flight engineer.");
    setMemImg("victor-glover");
  }

  function engineer(){
    setPosition("FLIGHT ENGINEER");
    setName("ANOUSHEH ANSARI");
    setAccom("Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.");
    setMemImg("anousheh-ansari")
  }

  return (
    <div>
      <div class="bgimgc">
        <Bar/>
        <hr class="denote crew"/>
        <div class="total-content">

            <img class="doug" src={require("./image-"+memImg+".png")} alt=""/>
            <div class="meet">
                <span class="num">02</span> MEET YOUR CREW
            </div>
            <div class="crew-content">

                <br/><br/><br/><br/><br/><br/><br/><br/>
                <span class="cm">{position}</span>
                <br/><br/>
                <span class="dh">{name}</span>
                <br/><br/>

                <p class="crew-info">
                  {accom}
                  {name=="DOUGLAS HURLEY"?<div><br/></div>:null}
                </p>

                <div onClick={commander} style={memImg==="douglas-hurley"?dotStyle:null} class="down-bar commander"></div>
                <div onClick={specialist} style={memImg==="mark-shuttleworth"?dotStyle:null} class="down-bar specialist"></div>
                <div onClick={pilot} style={memImg==="victor-glover"?dotStyle:null} class="down-bar pilot"></div>
                <div onClick={engineer} style={memImg==="anousheh-ansari"?dotStyle:null} class="down-bar engineer"></div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Crew;
