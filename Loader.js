import React from 'react';


import Home from "../containers/Home";


// Component

export default function Loader() {
  return (
  <>
   <div id="preloader">
            <div class="loader"></div>
            {/* <div class="lds-hourglass"></div> */}
        </div>
  </>






  );}
  
    // Wait for the page to load completely
window.addEventListener("load", function() {
    setTimeout(function(){
        // Hide the preloader after 5 seconds
        document.getElementById("preloader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2000); // 2000 milliseconds = 2 seconds
});

