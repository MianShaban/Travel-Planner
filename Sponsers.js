import React from 'react'

const Sponsers = () => {
  return (
    <>
      <div class="container-fluid">
        <div class="row ">
            <div class="col-md-12 ">
            
                {/* <h2 class="text-center sponser-title mt-2">Our <span className='p-1' style={{backgroundColor:"lightgreen",borderRadius:"9px"}}> Sponsors</span></h2> */}
                <marquee class="" behavior="alternate">
                    <img class="sponser-img  ml-3" src="/Assects/images/sponser1.png" alt="Sponsor 1"/>
                    <img class="sponser-img  ml-3" src="/Assects/images/sponser2.png" alt="Sponsor 2"/>
                    <img class="sponser-img  ml-3" src="/Assects/images/sponser3.png" alt="Sponsor 3"/>
                    <img class="sponser-img  ml-3" src="/Assects/images/sponser4.png" alt="Sponsor 4"/>
                    <img class="sponser-img  ml-3" src="/Assects/images/sponser5.png" alt="Sponsor 5"/>
                    <img class="sponser-img  ml-3" src="/Assects/images/sponser6.png" alt="Sponsor 6"/>
                    <img class="sponser-img  ml-3" src="/Assects/images/sponser7.png" alt="Sponsor 7"/>
                    <img class="sponser-img  ml-3" src="/Assects/images/sponser9.png" alt="Sponsor 9"/>
                    {/* <img class="sponser-img  ml-3" src="/Assects/images/sponser8.png" alt="Sponsor 8"/> */}



                </marquee>
                
                </div>
            </div>
        </div>
    </>
  )
}

export default Sponsers
