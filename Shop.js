import React from 'react'
import PageHead from './PageHead'
import HickingGoods from './HickingGoods'
import KalashGoods from './KalashGoods'
import Loader from './Loader'
import Footer from './Footer'
import Sponsers from './Sponsers'
import Faq from './Faq'

const Shop = (props) => {
  return (
    <div>
        {/* <Loader/> */}
        <PageHead  tittle="Shop"/>
        {/* <nav class="nav text-danger">
  <a class="nav-link" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Disabled</a>
</nav> */}
      <HickingGoods/>
<Faq/>
<Sponsers/>
      <Footer/>
    
    </div>
  )
}

export default Shop
