import React from 'react'

const Testimonils = () => {
  return (
    <div>
      <div className='container-fluid testimonil-container'>
        <div className='row p-5'>
<div className='col-md-6 '>
    <h1 className='text-center mt-5'>Some Testimonils of <br/>Happy Clients</h1>
<div id="carouselExampleControls" class="carousel slide   testinomial-carasoul" data-ride="carousel">
  <div class="carousel-inner p-5">
    <div class="carousel-item testinomial-carasoul-item active  p-2 ">
    <p className='testi-text'>
    "The website was incredibly easy to navigate! We found everything we needed from hotel bookings to guided tours. The descriptions were spot-on, and the local tips really enhanced our experience. Will definitely use this site again for our next trip!"
    <b>— Sarah M.</b>
    </p>
    </div>
    <div class="carousel-item testinomial-carasoul-item  p-2">
   <p className='testi-text'>
   "This site made our vacation planning stress-free. From choosing the best destinations to getting recommendations for hidden gems, it was all there. I loved the detailed itineraries—they were exactly what we were looking for!"
   <b>— James P.</b>
   </p>
    </div>
    <div class="carousel-item testinomial-carasoul-item p-2">
    <p className='testi-text'>"We saved so much time using this tourist site! The price comparisons were transparent, and the exclusive deals were a bonus. We felt like we were getting the best value for our vacation."
    <b>— Mark T.
    </b></p>
    </div>
  </div>
 <button class="carousel-control-prev bg-transparent" type="button" data-target="#carouselExampleControls" data-slide="prev">
    <span class="carousel-control-prev-icon right-left-icon mr-5" aria-hidden="true"></span>
    <span class="sr-only ">Previous</span>
  </button>
  <button class="carousel-control-next bg-transparent " type="button" data-target="#carouselExampleControls" data-slide="next">
    <span class="carousel-control-next-icon right-left-icon ml-5  " aria-hidden="true"></span>
    <span class="sr-only ">Next</span>
  </button>
</div>

</div>




<div className='col-md-6'>
<div data-aos="flip-left">
    <img className='testinomial-image' src='/Assects/images/testimonial-img.png'/>
    </div>
</div>

        </div>
      </div>
    </div>
  )
}

export default Testimonils
