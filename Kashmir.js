import React from 'react'
import Header from './Header'
import Section1 from './Section1'
import Team from './Team'
import Sponsers from './Sponsers'
import Footer from './Footer'
import Spots from './Spots'

const Kashmir = () => {
  return (

<>
<Header home="Home" about="About" pricing="Pricing" gallary="Gallary" blogs="Blogs" booking="Booking" exspots="Explorer Spots" valley="Valley" />

<div className='container-fluid naran-banner'>
    <div className='row'>
<img className='Naran-img-head' src='/Assects/images/kashmir-banner.png'/>
          {/* <div class="moving-clouds"></div> */}

        <div className='col-md-12 banner-text-holder-naran text-center'>
            <h1 className='banner-tittle-naran' >KASHMIR</h1>
         <p class="Banner-text-naran text-center mt-0">"Kashmir: A Heaven on Earth."</p>

        </div>
    </div>
</div>

{/* spots  */}

<Spots/>

        {/* <Section1/> */}
       
 {/* memories  */}
<div className='container '>
 <h1 className='ml-5'>Flash Backs</h1>
       
        <div className='row '>
            <div className='col-md-3 px-0 py-0 '> <div data-aos="fade-up"> <img src="/Assects/images/gallery-image-1.jpg" className='gallery-image w-100' alt="Memory-Image"/> </div> </div>
            <div className='col-md-3 px-0 py-0 '> <div data-aos="fade-up"> <img src="/Assects/images/gallery-image-3.jpg" className='gallery-image w-100' alt="Memory-Image"/> </div> </div>
            <div className='col-md-3 px-0 py-0 '> <div data-aos="fade-up"> <img src="/Assects/images/gallery-image-4.jpg" className='gallery-image w-100' alt="Memory-Image"/> </div> </div>
            <div className='col-md-3 px-0 py-0 '> <div data-aos="fade-up"> <img src="/Assects/images/gallery-image-6.jpg" className='gallery-image w-100' alt="Memory-Image"/> </div> </div>
        </div>

        <div className='row '>
            <div className='col-md-3 px-0 py-0 '> <div data-aos="fade-up"> <img src="/Assects/images/gallery-image-13.jpg" className='gallery-image w-100' alt="Memory-Image"/> </div> </div>
            <div className='col-md-3 px-0 py-0 '> <div data-aos="fade-up"> <img src="/Assects/images/gallery-image-14.jpg" className='gallery-image w-100' alt="Memory-Image"/> </div> </div>
            <div className='col-md-3 px-0 py-0 '> <div data-aos="fade-up"> <img src="/Assects/images/gallery-image-15.jpg" className='gallery-image w-100' alt="Memory-Image"/> </div> </div>
            <div className='col-md-3 px-0 py-0 '> <div data-aos="fade-up"> <img src="/Assects/images/gallery-image-16.jpg" className='gallery-image w-100' alt="Memory-Image"/> </div> </div>
        </div>

        </div>
<hr/>
{/* <Team/> */}
<Section1/>
<div className='container'>
        <div className="row mt-5">
        <div className="col-md-6">
        <div data-aos="zoom-in">
                <img className='w-100 section-4-img-1' src="/Assects/images/kashmir.jpg"/>
                </div>
                </div>
           
            <div className="col-md-6">
                <div className='row-gutter'>
                <div className="col">
                        <h1><b>Kashmir Valley</b></h1>
                        <p className='section4-text'>

                      
Kashmir is a picturesque and historically significant region located in the northern part of the Indian subcontinent, known for its breathtaking natural beauty, rich culture, and complex political history. The region is often called "Paradise on Earth" due to its stunning landscapes, which include snow-capped mountains, serene lakes, and lush valleys.
<a className='ml-3' href="https://en.wikipedia.org/wiki/Kashmir">Learn more...</a>
</p>
                    </div>
                    
                    
                </div>
            </div>
        </div>
       <hr/> </div>
        <Sponsers/>
        <Footer/>

</>

)
}

export default Kashmir