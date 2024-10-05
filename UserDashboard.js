import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import DashboardMain from '../AdminDashboard/DashboardMain'
import Profile from './Profile'
import BookingDashboard from './BookingDashboard'
import DashboardFooter from '../AdminDashboard/DashboardFooter'
import Userpannel from './Userpannel'
import UserPricing from './UserPricing'

const UserDashboard = () => {
  return (
    <div>
       <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3 px-0'>
        <div className='left-div p-5'>
            <ul>
                <li className='left-div-list-item'><h5><img className='w-25' src='/Assects/images/logo (2).png'/>Travel Planner</h5></li><hr/>
                <li className='left-div-list-item '><a className='left-div-link' href='#userdashboard'><h6><i class="bi bi-clipboard-data"></i>  Dashboard</h6></a></li><hr/>
                <li className='left-div-list-item'><a className='left-div-link' href="#profile1"><h6><i class="bi bi-person"></i>  Profile</h6></a></li><hr/>
                {/* <li className='left-div-list-item'><a className='left-div-link' href="#"><h6><i class="bi bi-list-columns-reverse"></i>  Revenew</h6></a></li><hr/> */}
                {/* <li className='left-div-list-item'><a className='left-div-link' href="#"><h6><i class="bi bi-receipt"></i>  Sales</h6></a></li><hr/> */}
                <li className='left-div-list-item'><a className='left-div-link' href="#bookingdashboard"><h6><i class="bi bi-bookmark-star"></i> Bookings</h6></a></li><hr/>
                {/* <li className='left-div-list-item'><Link className='left-div-link' to="/tripongo"><h6><i class="bi bi-airplane"></i>  Trips on Go</h6></Link></li><hr/> */}
                {/* <li className='left-div-list-item'><Link className='left-div-link' to="/addproduct"><h6><i class="bi bi-suitcase"></i>  Products</h6></Link></li><hr/> */}
                <li className='left-div-list-item'><Link className='left-div-link' to="/"><h6><i class="bi bi-box-arrow-right"></i>  Logout</h6></Link></li><hr/>


            </ul>
        </div>

        </div>
        <div className='col-md-9 right-div'>
          <Userpannel/>
          <UserPricing/>
          <BookingDashboard/>
          <Profile/>
          <DashboardFooter/>
            {/* <DashboardMain tittle="User"/> */}
        </div>
         </div> 
        </div>
    </div>
  )
}

export default UserDashboard
