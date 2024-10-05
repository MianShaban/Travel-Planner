// Init
import React from "react";

// Importing Components
import Header from "../components/Header";
import Banner from "../components/Banner";
import Loader from "../components/Loader";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Footer from "../components/Footer";
import Sponsers from "../components/Sponsers";
import Team from "../components/Team";
import Section4 from "../components/Section4";
import Review from "../components/Review";
import Testimonils from "../components/Testimonils";






// Home Component
export default function Home(props) {
  return (
    <div>
         <Loader />
       <Header home="Home" about="About" pricing="Pricing" gallary="Gallary" blogs="Blogs" booking="Booking" exspots="Explorer Spots" valley="Valley" />
         <Banner />
   <Section1/> 
      <Sponsers/>
   <Section2/>
   {/* <Section3/> */}
   <Section4/>
<Team/>
<Testimonils/>
{/* <GlobeDemo/> */}
<Review/>
  <Footer/>
    </div>
  );
}
