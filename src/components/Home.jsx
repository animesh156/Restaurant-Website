
import { Link } from "react-router-dom";

import "../styles/HomeStyle.css"

import Banner from "../assets/homeBg.jpg";

export default function Home() {
   
    return (
       
     
        <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer text-center">
          <h1 >Food Website</h1>
          <p>Delicious Foods </p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>

      
    );
}