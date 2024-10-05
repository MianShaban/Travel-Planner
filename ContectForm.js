import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'

const ContectForm = () => {
  return (
    <>
                   <Header home="Home" about="About" pricing="Pricing" gallary="Gallary" blogs="Blogs" booking="Booking" exspots="Explorer Spots" valley="Valley" />
                   <div className="container-fluid banner-container">
            <div class="row bn ">
<img src='/Assects/images/gallery-image-24.jpg' className='w-100'/>
 <div class="col-md-12   banner-text-holder">
                    
         <h1 class="contact-tittle">Contact Us </h1>
         
            </div>
      
        </div>
        </div>
    <div className="container">
            <div class="row">
        <div class="col-md-5 mt-5">
        <div data-aos="zoom-in">
            <img className='form-imag ' src="/Assects/images/contect-form-image.jpg" alt=""/>
            </div>
        </div>
        <div class="col p-4 ">
            <p class=" mt-3"> <span className='p-1' style={{backgroundColor:"lightsalmon",borderRadius:"5px"}}>Contect Us</span></p>
            <h1 class=" mt-3   ">Please Fill Out This Form  And We will <span  style={{backgroundColor:"lightgreen",borderRadius:"5px"}}>Get In Touch.</span>  </h1>
  

         <form class="needs-validation" novalidate>
            <div class="form-row">
              <div class="col-md-6 mb-3 mt-3">
                <input type="text" class="form-control bg-light" id="validationCustom01" placeholder="First name" required />
                
              </div>
                <div class="col-md-6 mb-3 mt-3">
                    <input type="text" class="form-control bg-light" id="validationCustom01" placeholder="Last Name" required />

                    
                  </div>
                  <div class="col-md-6 mb-3">
                    <input type="phone" class="form-control bg-light" id="validationCustom01" placeholder="Phone" required />
                    
                  </div>
                  
                  <div class="col-md-6 mb-3">
                    <input type="text" class="form-control bg-light" id="validationCustom01" placeholder="Subject" required />
                    
                  </div>

                    <input type="text" class="form-control py-5 bg-light "  id="validationCustom01" placeholder="Message" required/>
<div class="btn buttonform mt-5 ">Send us Message</div>
                    
                  
              
        
        </div>
        </form>
        </div>
</div>
</div>
<Footer/>
    </>
  )
}

export default ContectForm