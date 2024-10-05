import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageHead from '../components/PageHead'
import Contect from '../components/Contect'
import Location from '../components/Location'
import Team from '../components/Team'
import ContectForm from '../components/ContectForm'
import Sponsers from '../components/Sponsers'
import Faq from '../components/Faq'
import Testimonils from '../components/Testimonils'

const About = (props) => {
  return (
    <>
       {/* <Header home="Home" about="About" pricing="Pricing" gallary="Gallary" blogs="Blogs" exspots="Explorer Spots" valley="Valley"/> */}
      <PageHead tittle="About Us"   />
      <Contect />
      <Team/>
      {/* <ContectForm /> */}
      {/* <Location/> */}
{/* <Testimonils/> */}
<Sponsers/>
      <Footer/>
    </>
  )
}

export default About
