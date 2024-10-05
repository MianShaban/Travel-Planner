import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Section1 = () => {
  return (
    <>
      <div class="container-fluid section1">
        <div class="row p-5 ">
            <div class="col-md-6 p-5 ">
            <svg  xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-geo-alt-fill location-img1 text-light" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>

<svg  xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-geo-alt-fill location-img2 text-light" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>

<svg  xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-geo-alt-fill location-img3 text-light" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>

<div data-aos="zoom-in">

                <img class="section1-image-left w-100" src="/Assects/images/track-picture-s1.png" alt="track"/>
</div>
            </div>
            <div class="col-md-6 text-light  ">
            <svg class="buildingicon-section1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#fcfcfc" d="M336 0c-26.5 0-48 21.5-48 48l0 92.1 71.4 118.4c2.5-1.6 5.4-2.5 8.6-2.5l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-3.5 0 73.8 122.4c12.4 20.6 12.9 46.3 1.2 67.3c-.4 .8-.9 1.6-1.4 2.3L592 512c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48l-24 0 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72-40 0 0-144c0-26.5-21.5-48-48-48L336 0zm32 64l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM352 176c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm160 96c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM224 188.9L283.8 288 223 288l-48 64-24.6-41.2L224 188.9zm29.4-44.2C247.1 134.3 236 128 224 128s-23.1 6.3-29.4 16.7L5.1 458.9c-6.5 10.8-6.7 24.3-.7 35.3S22 512 34.5 512l379.1 0c12.5 0 24-6.8 30.1-17.8s5.8-24.5-.7-35.3L253.4 144.7z"/></svg>
        <div data-aos="fade-up">
           
            <p class="paratittle-se1">
                Explore Special Camping Spots
            </p>
            <p>
            Experience the freedom of outdoor camping—unplug,<br/> explore nature, and create lasting memories under the stars.
            </p>
            <p>
            Embark on a memorable adventure at our unique camping spots, <br/>ideal for both seasoned campers and beginners. With diverse locations<br/> offering a perfect mix of relaxation and adventure, your next trip is sure,<br/> to create lasting memories!
            </p>
</div>
            <div class="row">
                <div class="col-md-12 ">
                    <ul>
                        <li class="imagelist-se1">
                        {/* <img class="section1-image-right  " src="/Assects/images/mountain-sec1.jfif" alt="track"/> */}
                        <Link to="/fairy"><button className='sec1-button-spot'>Famous Spots</button></Link>
                        
                        </li>
                        <li class="imagelist-se1">
                        {/* <img class="section1-image-right r2 " src="/Assects/images/bornfire-sec1.jpg" alt="track"/> */}
                        <Link to="/login"><button className='sec1-button2-spot '>Book Me</button></Link>
                        
                        </li>

                    </ul>
                  

                   

                

                </div>
              
            </div>

            </div>
        </div>
        <div data-aos="fade-up">
        <img class="trees-image  " src="/Assects/images/mountain.png"/>
</div>
      </div>
    </>
  )
}

export default Section1
