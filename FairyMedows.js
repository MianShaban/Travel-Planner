import React from 'react'
import Header from './Header'
import Testimonils from './Testimonils'
import Team from './Team'
import Sponsers from './Sponsers'
import Footer from './Footer'
import Spots from './Spots'

const FairyMedows = () => {
  return (
    <>
  <Header home="Home" about="About" pricing="Pricing" gallary="Gallary" blogs="Blogs" booking="Booking" exspots="Explorer Spots" valley="Valley" />

  <div className='container-fluid naran-banner'>
    <div className='row'>
<img className='Naran-img-head' src='/Assects/images/fairymedows-banner.jpg'/>
          {/* <div class="moving-clouds"></div> */}

        <div className='col-md-12 banner-text-holder-naran text-center'>
            <h1 className='banner-tittle-naran' >FAiRY  MEADOWS</h1>

         <p class="Banner-text-naran text-center mt-0">"Fairy Meadows: Tranquil, scenic, adventure."</p>

        </div>
    </div>
</div>

{/* spots  */}

<Spots/>

        <div className='container p-5'>
        <div className="row ">
<div className="col">
                        <h1><b>Fairy Meadows</b></h1>
                        <p className='section4-text'>

                        Fairy Meadows, a breathtakingly beautiful alpine meadow located at the base of Pakistan’s second-highest<b> peak, Nanga Parbat (8,126 meters or 26,660 feet) </b>, is often hailed as one of the most scenic spots in the world. Situated in the Gilgit-Baltistan region, it sits at an altitude of around <b>3,300 meters (10,800 feet)</b>, offering panoramic views of the towering Nanga Parbat, also known as the "Killer Mountain."
<a className='ml-3' href="https://en.wikipedia.org/wiki/Fairy_Meadow,_New_South_Wales">Learn more...</a>
</p>
                    </div>

       
           
            <div className="col-md-6">
        <div data-aos="zoom-in">
                
                    <img className='w-100 section-4-img-1' src="/Assects/images/fairy-meadows-se4.jpg"/>
                </div> 
            </div>
        </div>
        </div>
{/* <Testimonils/> */}
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
        {/* <Team/> */}
        <Sponsers/>
        <Footer/>
    </>
  )
}

export default FairyMedows