import React from 'react'
import Header from './Header'
import Section3 from './Section3'
import Sponsers from './Sponsers'
import Team from './Team'
import Footer from './Footer'
import Spots from './Spots'

const Sakardu = () => {
  return (
    <>
    <Header home="Home" about="About" pricing="Pricing" gallary="Gallary" blogs="Blogs" booking="Booking" exspots="Explorer Spots" valley="Valley" />
    
    <div className='container-fluid naran-banner'>
    <div className='row'>
<img className='Naran-img-head' src='/Assects/images/sakardu-banner.jpg'/>
          {/* <div class="moving-clouds"></div> */}

        <div className='col-md-12 banner-text-holder-naran text-center'>
            <h1 className='banner-tittle-naran' >SAKARDU</h1>
         <p class="Banner-text-naran text-center mt-0">"Skardu: Peaks, lakes, adventure, serenity."</p>

        </div>
    </div>
</div>

{/* spots  */}

<Spots/>

<div className='container p-5'>
        <div className="row mt-5">
        <div className="col-md-6">
        <div data-aos="zoom-in">
                <img className='w-100 section-4-img-1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDJN-_QIxtmSAQ5PNYd9Vsv65ru9WfZADkTLH43KkJtRjXYQrT38HaarSC75bh3ACjRMM&usqp=CAU"/>
                </div>
                </div>
           
            <div className="col-md-6">
                <div className='row-gutter'>
                <div className="col">
                        <h1><b>Sakardu</b></h1>
                        <p className='section4-text'>
                        Skardu is a picturesque city located in the Gilgit-Baltistan region of Pakistan. It serves as a gateway to some of the world’s highest peaks in the Karakoram Range, including K2, the second-highest mountain in the world. Skardu is famous for its mesmerizing landscapes, towering mountains, serene lakes, and rich cultural heritage.
<a className='ml-3' href="https://en.wikipedia.org/wiki/Skardu">Learn more...</a>
</p>
                    </div>
                    
                    
                </div>
            </div>
            
        </div>
        </div>

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
<Sponsers/>
{/* <Team/> */}
<Footer/>

    </>
  )
}

export default Sakardu