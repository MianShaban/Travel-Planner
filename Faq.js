import React from 'react'
import PageHead from './PageHead'

const Faq = () => {
  return (
    <div>
        <div className='container'>
            <div className='row p-5'>
                <div className='col-md-12'>
      <h1>Frequently Ask Questions</h1>
      {/* <p>Here are some of the most frequently asked questions about our company.</p> */}

      <div class="accordion mt-5" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button  class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Why choose us ?
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
<b>1.Comprehensive Travel Solutions</b> <br/>
    We provide everything you need in one place—from flight bookings and accommodations to guided tours and local experiences. Our platform simplifies travel planning.
    <br/>
<b>2.Tailored Recommendations</b><br/>  
   Whether you're a solo adventurer, a family traveler, or seeking luxury, we offer personalized suggestions based on your preferences, making your trip truly unique.
   <br/>
   <b>3.Exclusive Deals and Discounts</b><br/> 
   - We partner with top hotels, airlines, and tour operators to bring you special deals you won’t find anywhere else, ensuring great value for your money.
   <br/>
   <b>4.User-Friendly Interface</b><br/>
   - Our website is designed with travelers in mind, offering an intuitive and seamless booking experience that saves you time and effort.
   <br/>
   <b>5.Expert Travel Guides</b><br/>
   - Access detailed guides, insider tips, and hidden gems for your destination, curated by local experts who know the region inside out.
   <br/>
   <b>6.24/7 Customer Support</b><br/>
   - We’re here for you every step of the way, offering round-the-clock support to address any questions or issues you may encounter during your trip.
   <br/>
   <b>7.Trusted by Thousands</b><br/>
   - With countless satisfied travelers and positive reviews, we have built a reputation as a trusted travel partner for adventurers around the globe.
   <br/>
   <b>8.Safe and Secure Bookings</b><br/>
   Our website guarantees a safe and secure booking process, with various payment options to suit your needs.

      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        How do I book a trip on your website?
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
      Booking a trip is simple! Just enter your desired destination, dates, and preferences in our search bar. Browse through available options for flights, accommodations, and tours, and select the ones that best suit your needs. Follow the prompts to complete your booking securely online.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Can I customize my travel itinerary?
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
      Yes! We offer the option to create a fully customized itinerary. You can select accommodations, transportation, and activities based on your interests, and we’ll help organize everything for a seamless experience.
      </div>
    </div>
  </div>


  <div class="card">
    <div class="card-header" id="headingFour">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Are there any hidden fees?
        </button>
      </h2>
    </div>
    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
      <div class="card-body">
      No, we believe in transparency. The price you see at checkout includes all applicable taxes and fees. If there are additional charges (like baggage fees or resort fees), we’ll let you know upfront
      </div>
    </div>
  </div>


  <div class="card">
    <div class="card-header" id="headingFive">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        Are there group discounts available?
        </button>
      </h2>
    </div>
    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
      <div class="card-body">
      Yes, we offer special rates for group bookings. If you’re traveling with 10 or more people, please contact our group travel team, and we’ll assist you in securing the best deals
      </div>
    </div>
  </div>


</div>
      
                
            </div>
        </div>
    
        </div>

    </div>
  )
}

export default Faq
