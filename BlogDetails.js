import React from 'react'
import PageHead from './PageHead'
import Review from './Review'
import Sponsers from './Sponsers'
import Footer from './Footer'
import Testimonils from './Testimonils'

const BlogDetails = () => {
  return (
    <div>
    <PageHead tittle="Blog Detail"/>
    <div className='container'>
<h1 className='text-center mt-5'><b>Discover the World with Travel Planner, <br/>"Your Trusted Partner in Adventure"</b></h1>
        <div className="row ">
            <div className="col-md-9">
                <p className='blog-detail-text'>
At <b>Travel Planner</b>, we believe that travel is more than just reaching a destination; it’s about experiencing the journey. With over a decade of experience in <b>creating unforgettable travel </b>itineraries, our mission is to make <span className='p-1 ' style={{backgroundColor:"lightgreen",borderRadius:"10px"}}>your travel dreams a reality</span> , no matter how big or small.
</p><hr/>
<h4>Who We Are</h4>
<p className='blog-detail-text'>

Founded with the goal of offering personalized travel experiences, Travel Planner has grown into a trusted name for wanderlust seekers around the globe. We specialize in curating unique travel packages that cater to all kinds of travelers—from adventure enthusiasts to culture explorers and luxury vacationers.
</p>
<h4>What We Offer</h4>
<p className='blog-detail-text'>

<h5>1.Custom Travel Itineraries</h5>
   Whether you're planning a weekend getaway or a month-long international adventure, we tailor each trip to fit your preferences, interests, and budget. Our travel experts are passionate about turning your vision into a seamless itinerary that ensures a stress-free experience.
</p>
<p className='blog-detail-text'>

<h5>2.Group Travel & Corporate Retreats</h5>
   Planning a family reunion, a corporate retreat, or a group tour? Travel Planner takes care of all the logistics, from accommodation and transportation to group activities, ensuring everyone has a memorable experience.
   </p>
<p className='blog-detail-text'>

<h5>3.Adventure Tours</h5>
   For those who crave adventure, we offer specialized tours that include hiking, trekking, and outdoor activities in some of the world’s most breathtaking locations. Whether it’s scaling mountain peaks or exploring hidden trails, we have an adventure for you.
   </p>
<p className='blog-detail-text'>
<h5>4.Luxury Escapes</h5>

   Want to experience the finer side of travel? Our luxury packages include exclusive accommodations, private tours, and curated experiences that offer the ultimate in comfort and elegance.
   </p>
<p className='blog-detail-text'>

<h5>5.Cultural Experiences</h5>
   Immerse yourself in the culture of your chosen destination. From local culinary tours and festivals to art and history walks, our cultural experiences are designed to give you a deeper understanding and appreciation of the places you visit.
   </p>
<p className='blog-detail-text'>

<h5>6.Travel Insurance </h5>
   We provide comprehensive travel insurance options and visa assistance services to make sure your journey is secure and hassle-free.
   </p>


<h4>Why Choose Travel Planner?</h4>

<p className='blog-detail-text'>

<b>Personalized Service:</b> We listen to your needs and create a travel plan tailored specifically to your desires. No two trips are the same with Travel Planner.
</p>
<p className='blog-detail-text'>

<b>Experienced Team:</b> Our travel advisors have firsthand knowledge of many destinations and can offer insights that only an experienced traveler would know.
</p>
<p className='blog-detail-text'>

<b>Global Connections:</b> With partners worldwide, we offer access to exclusive deals, private tours, and hidden gems that aren’t available to the average traveler.
</p>

<h4>Our Commitment to Sustainability</h4>
<p className='blog-detail-text'>

At Travel Planner, we’re committed to responsible and sustainable travel. We work closely with local communities to ensure that our trips have a positive impact on the environment and the cultures we visit. Our eco-friendly packages prioritize conservation and support local economies.
</p>

<h4>Let Us Plan Your Next Adventure</h4>
<p className='blog-detail-text'>

Ready to embark on your next adventure? Contact <b ><a href='tel:+923130401899' >Travel Planner</a></b> today to start planning a trip that will leave you with memories to last a lifetime. Whether it’s a family vacation, solo exploration, or group tour, we’ve got the perfect plan for you.

</p>
            </div>
            <div className='col-md-3  border-left'>
<div data-aos="fade-up"> <img src="/Assects/images/gallery-image-9.jpg" className='gallery-image w-100 mt-5' alt="Memory-Image"/> </div>
<div data-aos="fade-up"> <img src="/Assects/images/gallery-image-8.jpg" className='gallery-image w-100' alt="Memory-Image"/> </div>
<div data-aos="fade-up"> <img src="/Assects/images/gallery-image-12.jpg" className='gallery-image w-100' alt="Memory-Image"/> </div>
<div data-aos="fade-up"> <img src="/Assects/images/gallery-image-21.jpg" className='gallery-image w-100' alt="Memory-Image"/> </div>
<div data-aos="fade-up"> <img src="/Assects/images/gallery-image-11.jpg" className='gallery-image w-100' alt="Memory-Image"/> </div>
<div data-aos="fade-up"> <img src="/Assects/images/gallery-image-17.jpg" className='gallery-image w-100' alt="Memory-Image"/> </div>
<div data-aos="fade-up"> <img src="/Assects/images/gallery-image-19.jpg" className='gallery-image w-100' alt="Memory-Image"/> </div>
<div data-aos="fade-up"> <img src="/Assects/images/gallery-image-20.jpg" className='gallery-image w-100' alt="Memory-Image"/> </div>

            </div>
        </div>
    </div>
    <Review/>
    {/* <Testimonils/> */}
    {/* <Sponsers/> */}
    <Footer/>

    </div>
  )
}

export default BlogDetails
