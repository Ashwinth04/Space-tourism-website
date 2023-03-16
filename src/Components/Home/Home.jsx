import React from 'react';
import { Link } from 'react-router-dom';
import Bar from '../Bar/Bar';
import "./home.css";


function Home() {
  return (
  <div>
    <div className="bgimg">
        <Bar/>
        <hr class="denote home"/>
        <div className="home-content">

            <h5>So, you want to travel to</h5>
            <h1>SPACE</h1>
            <div class="p">Let’s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!</div>

        </div>
        <Link class="explore-link" to="/destination">
        <div className="explore">
            <h2>EXPLORE</h2>
        </div>
        </Link>

    </div>
  </div>
  )
}

export default Home;
