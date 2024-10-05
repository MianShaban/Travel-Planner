import React from 'react'
import Header from './Header'
import Testimonils from './Testimonils'
import Team from './Team'
import Sponsers from './Sponsers'
import Footer from './Footer'
import Spots from './Spots'

const BaltitFort = () => {
  return (
      <>
          <Header home="Home" about="About" pricing="Pricing" gallary="Gallary" blogs="Blogs" booking="Booking" exspots="Explorer Spots" valley="Valley" />

          <div className='container-fluid naran-banner'>
    <div className='row'>
<img className='Naran-img-head' src='/Assects/images/baltit-banner.jpg'/>
          {/* <div class="moving-clouds"></div> */}

        <div className='col-md-12 banner-text-holder-naran text-center'>
            <h1 className='banner-tittle-naran' >BALTIT FORT</h1>
         <p class="Banner-text-naran text-center mt-0">"Nature, history, tranquility."</p>

        </div>
    </div>
</div>


{/* spots  */}

<Spots/>

        <div className='container p-5'>

        <div className="row mt-5">

<div className="col-md-6">
<div data-aos="zoom-in">
        
        <img className='w-100 section-4-img-1' src="/Assects/images/baltit-fort-se4.jpg"/>
     </div>
</div>

<div className="col">
                <h1><b>Baltit Fort</b></h1>
                <p className='section4-text'>

                Perched high above the Hunza Valley in Pakistan's <b> Gilgit-Baltistan region </b>, Baltit Fort is an ancient architectural masterpiece with a rich history dating back over <b>700 years </b>. This iconic fort, with its strategic location overlooking the majestic Karakoram Range, served as the residence of the rulers, or Mirs, of Hunza for centuries and stands as a symbol of the region's cultural and historical heritage.
<a className='ml-3' href="https://en.wikipedia.org/wiki/Baltit_Fort">Learn more...</a>
</p>
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

export default BaltitFort
