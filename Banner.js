import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


export default function Banner() {
    return (
        <>
            <img class="banner-image " src="/Assects/images/banner-img-travel-planner.png"
         alt="Banner-Image"/>
        <div className="container-fluid banner-container ">
            <div class="row">
                {/* <img  src='https://ideogram.ai/assets/progressive-image/balanced/response/_Pa2SDasSvKCxxBUDc2-gQ'/> */}
 <div class="col-md-12  text-center banner-text-holder">
                    
         <h1 class="Banner-tittle">"Discover More, Live More."</h1>
         <p class="Banner-text">Plan your next outdoor adventure with us!</p>
         
         <Link to="/login"><button className='mt-5 banner-button'>Book Me</button></Link>
            </div>
      
        </div>
        </div>



   
  

        
        </>
    );
}