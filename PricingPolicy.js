import React from 'react'
import PageHead from './PageHead'
import ContectForm from './ContectForm'
import Testimonils from './Testimonils'
import Faq from './Faq'
import Footer from './Footer'
import PricingPlans from './PricingPlans'

const PricingPolicy = () => {
  return (

    <>

    <PageHead tittle="Pricing"/>
   <PricingPlans/>
    {/* <Testimonils/> */}
    {/* <ContectForm/> */}
    <Faq/>
    <Footer/>

    </>
  )
}

export default PricingPolicy
