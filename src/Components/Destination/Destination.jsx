import React, {useState} from 'react';
import Bar from '../Bar/Bar';
import "./destination.css";

function Destination() {
  const [planetName,setPlanetName] = useState("MOON");
  const [planetDescription,setPlanetDescription] = useState("See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.");
  const [avgDistance,setAvgDistance] = useState("384,400 KM");
  const [travelTime,setTravelTime] = useState("3 DAYS");
  const  [planetImg,setPlanetImg] = useState("moon");


  function handleMoon(){
     setPlanetName("MOON");
     setPlanetDescription("See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.");
     setAvgDistance("384,400 KM");
     setTravelTime("3 DAYS");
     setPlanetImg("moon");
  }

  function handleMars(){
     setPlanetName("MARS");
     setPlanetDescription("Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!");
     setAvgDistance("225 MIL.KM");
     setTravelTime("9 MONTHS");
     setPlanetImg("mars");
  }

  function handleEuropa(){
    setPlanetName("EUROPA");
    setPlanetDescription("  The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.");
    setAvgDistance("628 MIL.KM");
    setTravelTime("3 YEARS");
    setPlanetImg("europa");
  }

  function handleTitan(){
    setPlanetName("TITAN");
    setPlanetDescription("The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.");
    setAvgDistance("1.6 BIL.KM");
    setTravelTime("7 YEARS");
    setPlanetImg("titan");
  }

  
  return (
    <div>
      <div class="bgimgd">
          <Bar/>
          <hr class="denote destination"/>
          <div class="total">


              <div class="pyd">
                01 PICK YOUR DESTINATION
              </div>
              <div class="moon">
                <img class="moon-img" src={require("./image-"+planetImg+".png")} alt=""/>
              </div>

              <div class="content">

                  <div class="bar">
                    <p onClick={handleMoon} class="span-bar">MOON</p>
                    <p onClick={handleMars} class="span-bar">MARS</p>
                    <p onClick={handleEuropa} class="span-bar">EUROPA</p>
                    <p onClick={handleTitan} class="span-bar">TITAN</p>
                  </div>

                  <div class="heading">
                    {planetName}
                  </div>

                  <div class="description">
                  {planetDescription}
                  {planetName==="MARS"?<div><br/></div>:null}
                   
                    <hr class="lined"/>
                  </div>

                  <div class="quantity">
                      <div class="measures">
                        AVG. DISTANCE
                        <br/>
                        <span class="qua">{avgDistance}</span>

                      </div>
                      <div class="measures an">
                        EST. TRAVEL TIME
                        <br/>
                        <span class="qua">{travelTime}</span>

                      </div>

                   </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Destination;
