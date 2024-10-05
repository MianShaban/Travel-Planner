import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import DashboardMain from './DashboardMain'
import Produts from './Produts'
import TripOnGo from './TripOnGo'
import UserDashboard from '../UserDashboard/UserDashboard'
import Profile from '../UserDashboard/Profile'

const AdminDashboard = () => {
  return (
    <div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3 px-0'>
        <div className='left-div p-5'>
            <ul>
                <li className='left-div-list-item'><h5><img className='w-25' src='/Assects/images/logo (2).png'/>Travel Planner</h5></li><hr/>
                <li className='left-div-list-item '><a className='left-div-link' href='#dashboard'><h6><i class="bi bi-clipboard-data"></i>  Dashboard</h6></a></li><hr/>
                {/* <li className='left-div-list-item'><a className='left-div-link' href="#profile"><h6><i class="bi bi-person"></i>  Profile</h6></a></li><hr/> */}
                <li className='left-div-list-item'><a className='left-div-link' href="#revenue"><h6><i class="bi bi-list-columns-reverse"></i>  Revenew</h6></a></li><hr/>
                <li className='left-div-list-item'><a className='left-div-link' href="#sales"><h6><i class="bi bi-receipt"></i>  Sales</h6></a></li><hr/>
                <li className='left-div-list-item'><a className='left-div-link' href="#tripongo"><h6><i class="bi bi-airplane"></i>  Trips on Go</h6></a></li><hr/>
                <li className='left-div-list-item'><a className='left-div-link' href="#product"><h6><i class="bi bi-suitcase"></i>  Products</h6></a></li><hr/>
                <li className='left-div-list-item'><Link className='left-div-link' to="/"><h6><i class="bi bi-box-arrow-right"></i>  Logout</h6></Link></li><hr/>


            </ul>
        </div>

                </div>
                <div className='col-md-9 px-0'>
        <div className='right-div'>
        <DashboardMain/>

</div>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AdminDashboard
