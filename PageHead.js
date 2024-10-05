import React from 'react'
import Header from './Header'

const PageHead = (props) => {
  // const text = "OUTLINED TEXT ANIMATION";
  // let index = 0;
  // const speed = 100; // typing speed in milliseconds

  // function typeEffect() {
  //   if (index < text.length) {
  //     document.getElementById("text").innerHTML += text.charAt(index);
  //     index++;
  //     setTimeout(typeEffect, speed);
  //   }
  // }

  // // Start the typing effect when the page loads
  // window.onload = typeEffect;

  return (
    <div>
               <Header home="Home" about="About" pricing="Pricing" gallary="Gallary" blogs="Blogs" booking="Booking" exspots="Explorer Spots" valley="Valley" />

        <div class="container-fluid p-5 page-head-set ">
           <div class=" row my-5">
            <div class="col-md-12">
               <h1 class=" page-head-set-outlined-text  mt-5">{props.tittle}</h1>

            </div>
              
           </div>
          
        </div>
    </div>
  )
}


export default PageHead
