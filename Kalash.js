import React from 'react'
import Header from './Header'
import Team from './Team'
import Footer from './Footer'
import Section2 from './Section2'
import Sponsers from './Sponsers'
import Spots from './Spots'

const Kalash = () => {
  return (
    <>
       <Header home="Home" about="About" pricing="Pricing" gallary="Gallary" blogs="Blogs" booking="Booking" exspots="Explorer Spots" valley="Valley" />
    
       <div className='container-fluid naran-banner'>
    <div className='row'>
<img className='Naran-img-head' src='https://blog.imusafir.pk/wp-content/uploads/2023/07/Explore-The-Stunning-Landscapes-Of-The-UK-Must-Visit-Destinations-18-1.png'/>
          {/* <div class="moving-clouds"></div> */}

        <div className='col-md-12 banner-text-holder-naran text-center'>
            <h1 className='banner-tittle-naran' >KALASH VALLEY</h1>
         <p class="Banner-text-naran text-center mt-0">"Kalash Valley: Nature, history, tranquility."</p>

        </div>
    </div>
</div>

{/* spots  */}

<Spots/>

        <Section2/>

        {/* memories  */}
<div className='container mt-5'>
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

        <div className='container mt-5'>
        <div className="row mt-5">
        <div className="col-md-6">
        <div data-aos="zoom-in">
                <img className='w-100 section-4-img-1' src="/Assects/images/kalash.jpeg"/>
                </div>
                </div>
           
            <div className="col-md-6">
                <div className='row-gutter'>
                <div className="col">
                        <h1><b>Kalash Valley</b></h1>
                        <p className='section4-text'>

                        Kalash Valley is a beautiful and unique region in northern Pakistan, located in the Chitral District of Khyber Pakhtunkhwa province. It is renowned for its stunning landscapes and the distinct culture of the Kalash people, who are known for their vibrant traditions, colorful dress, and polytheistic religion. The Kalash Valley is often admired for its picturesque scenery, including lush green valleys and snow-capped mountains. 
<a className='ml-3' href="https://en.wikipedia.org/wiki/Kalasha_Valleys">Learn more...</a>
</p>
                    </div>
                    
                    
                </div>
            </div>
        </div>
       <hr/> </div> 

        <Sponsers/>
        {/* <Team/> */}
        <Footer/>
    
    </>
  )
}

export default Kalash