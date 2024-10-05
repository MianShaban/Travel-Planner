import React from 'react'
import TripOnGo from './TripOnGo'

const TourDetails = () => {
  return (
    <div>
      <div className='container p-3 tour-details-container'>
<h1>Tour Details</h1>
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
                <li className='tour-detail-dash'> <i class="bi bi-calendar-check"></i> Nov 05,2024 </li>
                <li className='tour-detail-dash'> <i class="bi bi-calendar-check"></i> Nov 06,2024 </li>
                <li className='tour-detail-dash'> <i class="bi bi-calendar-check"></i> Nov 09,2024 </li>
                <li className='tour-detail-dash'> <i class="bi bi-calendar-check"></i> Nov 10,2024 </li>
            </ul>
        </div>

     </div>
      </div>
      {/* <TripOnGo/> */}
    </div>
  )
}

export default TourDetails
