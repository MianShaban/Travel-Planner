import React from 'react'
import Header from './Header'
import Section3 from './Section3'
import Testimonils from './Testimonils'
import Team from './Team'
import Sponsers from './Sponsers'
import Footer from './Footer'
import Spots from './Spots'


const Naran = () => {
  return (
    <div className='main-naran'>
       <Header home="Home" about="About" pricing="Pricing" gallary="Gallary" blogs="Blogs" booking="Booking" exspots="Explorer Spots" valley="Valley" />

<div className='container-fluid naran-banner'>
    <div className='row'>
<img className='Naran-img-head' src='/Assects/images/naran-head.jpg'/>
          {/* <div class="moving-clouds"></div> */}

        <div className='col-md-12 banner-text-holder-naran text-center'>
            <h1 className='banner-tittle-naran' >NARAN VALLEY</h1>
         <p class="Banner-text-naran text-center mt-0">"Nature's paradise nestled in Naran."</p>

        </div>
    </div>
</div>

{/* spots  */}

<Spots/>



<Section3/>


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
<hr/>

<div className='container'>
        <div className="row mt-5">
        <div className="col-md-6">
        <div data-aos="zoom-in">
                <img className='w-100 section-4-img-1' src="/Assects/images/home-section-4-image-horse.webp"/>
                </div>
                </div>
           
            <div className="col-md-6">
                <div className='row-gutter'>
                <div className="col">
                        <h1><b>Naran Valley</b></h1>
                        <p className='section4-text'>

Nestled in the heart of the mighty Kaghan Valley, Naran Valley is one of Pakistan’s most picturesque and serene destinations. Known for its breathtaking landscapes, crystal-clear rivers, and towering snow-capped peaks, it offers a perfect blend of adventure and tranquility. Located at an altitude of around<b> 2,409 meters (7,904 feet)</b>, the valley draws tourists from all over the world who seek to escape into nature’s beauty.
<a className='ml-3' href="https://en.wikipedia.org/wiki/Naran_(town)">Learn more...</a>
</p>
                    </div>
                    
                    
                </div>
            </div>
        </div>
        </div>
<div className='mt-5'>

        {/* <Testimonils/> */}
</div>
        {/* <Team/> */}
        {/* <Sponsers/> */}
        <Footer/>
    </div>
  )
}

export default Naran