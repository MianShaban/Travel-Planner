import React from 'react'
import TourDetails from './TourDetails'
import DashboardFooter from './DashboardFooter'

const TripOnGo = () => {
  return (
    <div>
      {/* <TourDetails/><hr/> */}
      <div id='tripongo' className='container p-3 tour-details-container'>
<h1>On Going Bookings</h1>
     <div className='row'>
        {/* Busses  */}
        <div className='col-md-3'>
            
            <ul>
                <li className='tour-detail-dash'><h3>Buses</h3></li><hr/>
                <li className='tour-detail-dash'><b>21</b>-234-<b>A</b></li>
                <li className='tour-detail-dash'><b>20</b>-156-<b>B</b></li>
                <li className='tour-detail-dash'><b>22</b>-784-<b>C</b></li>
                <li className='tour-detail-dash'><b>23</b>-207-<b>E</b></li>
            </ul>
        </div>
        {/* weather  */}
        <div className='col-md-3'>
        <ul>
                <li className='tour-detail-dash'><h3>Weather</h3></li><hr/>
                <li className='tour-detail-dash'><i class="bi bi-thermometer-half text-danger"></i> 15/C <i class="bi bi-tornado text-danger"></i> Stormy</li>
                <li className='tour-detail-dash'><i class="bi bi-thermometer-half text-warning"></i>28/C <i class="bi bi-sun text-warning"></i> Sunny</li>
                <li className='tour-detail-dash'><i class="bi bi-thermometer-half"></i>22/C <i class="bi bi-wind"></i> Wind</li>
                <li className='tour-detail-dash'><i class="bi bi-thermometer-half text-success"></i>5/C <i class="bi bi-cloud-rain-heavy text-success"></i> Heavy Rain</li>
            </ul>
        </div>
{/* Tour route */}

        <div className='col-md-3'>
        <ul>
                <li className='tour-detail-dash'><h3>Departures</h3></li><hr/>
                <li className='tour-detail-dash'><b>LHR</b> <i class="bi bi-arrow-right text-danger"></i><b>NARAN</b></li>
                <li className='tour-detail-dash'><b>ISL</b> <i class="bi bi-arrow-right text-danger"></i><b>SDU</b> </li>
                <li className='tour-detail-dash'><b>SDU</b> <i class="bi bi-arrow-right text-danger"></i><b>LHR</b> </li>
                <li className='tour-detail-dash'><b>LHR</b> <i class="bi bi-arrow-right text-danger"></i><b>BALTIT</b></li>
            </ul>
        </div>

        {/* Time  */}
        <div className='col-md-3'>
        <ul>
                <li className='tour-detail-dash'><h3>Time</h3></li><hr/>
                <li className='tour-detail-dash'> <i class="bi bi-calendar-check"></i> Nov 19,2024 </li>
                <li className='tour-detail-dash'> <i class="bi bi-calendar-check"></i> Nov 20,2024 </li>
                <li className='tour-detail-dash'> <i class="bi bi-calendar-check"></i> Nov 22,2024 </li>
                <li className='tour-detail-dash'> <i class="bi bi-calendar-check"></i> Nov 24,2024 </li>
            </ul>
        </div>

     </div>
      </div>
      <hr/>
      <div className='container p-3 tour-details-container '>
<h1>Cancel Bookings</h1>
     <div className='row' style={{color:"GrayText"}}>
        {/* Busses  */}
        <div className='col-md-3'>
            
            <ul>
                <li className='tour-detail-dash'><h3>Buses</h3></li><hr/>
                <li className='tour-detail-dash'><del><b>21</b>-234-<b>A</b></del></li>
                <li className='tour-detail-dash'><del><b>20</b>-156-<b>B</b></del></li>
                <li className='tour-detail-dash'><del><b>22</b>-784-<b>C</b></del></li>
                <li className='tour-detail-dash'><del><b>23</b>-207-<b>E</b></del></li>
            </ul>
        </div>
        {/* weather  */}
        <div className='col-md-3'>
        <ul>
                <li className='tour-detail-dash'><h3>Weather</h3></li><hr/>
                <li className='tour-detail-dash'><del><i class="bi bi-thermometer-half text-danger"></i> 15/C <i class="bi bi-tornado text-danger"></i> Stormy </del></li>
                <li className='tour-detail-dash'><del><i class="bi bi-thermometer-half text-warning"></i>28/C <i class="bi bi-sun text-warning"></i> Sunny </del></li>
                <li className='tour-detail-dash'><del><i class="bi bi-thermometer-half"></i>22/C <i class="bi bi-wind"></i> Wind </del></li>
                <li className='tour-detail-dash'><del><i class="bi bi-thermometer-half text-success"></i>5/C <i class="bi bi-cloud-rain-heavy text-success"></i> Heavy Rain</del></li>
            </ul>
        </div>
{/* Tour route */}

        <div className='col-md-3'>
        <ul>
                <li className='tour-detail-dash'><h3>Departures</h3></li><hr/>
                <li className='tour-detail-dash'><del><b>LHR</b> <i class="bi bi-arrow-right text-danger"></i><b>NARAN</b></del></li>
                <li className='tour-detail-dash'><del><b>ISL</b> <i class="bi bi-arrow-right text-danger"></i><b>SDU</b> </del></li>
                <li className='tour-detail-dash'><del><b>SDU</b> <i class="bi bi-arrow-right text-danger"></i><b>LHR</b> </del></li>
                <li className='tour-detail-dash'><del><b>LHR</b> <i class="bi bi-arrow-right text-danger"></i><b>BALTIT</b></del></li>
            </ul>
        </div>

        {/* Time  */}
        <div className='col-md-3'>
        <ul>
                <li className='tour-detail-dash'><h3>Time</h3></li><hr/>
                <li className='tour-detail-dash'> <i class="bi bi-calendar-check"></i> <span className='text-danger'> Sep 19,2024 </span></li>
                <li className='tour-detail-dash'> <i class="bi bi-calendar-check"></i> <span className='text-danger'> Feb 20,2024</span> </li>
                <li className='tour-detail-dash'> <i class="bi bi-calendar-check"></i> <span className='text-danger'> April 22,2024 </span></li>
                <li className='tour-detail-dash'> <i class="bi bi-calendar-check"></i> <span className='text-danger'> July 24,2024 </span></li>
            </ul>
        </div>

     </div>
      </div><hr/>
{/* <DashboardFooter/> */}

    </div>
  )
}

export default TripOnGo
