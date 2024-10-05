// import React from 'react'
// import Location from '../../components/Location'
// import DashboardFooter from './DashboardFooter'
// import TourDetails from './TourDetails'

// const DashboardMain = (props) => {



//   return (
//     <div>
//       <div className='container dash-conainer'>
//             <h1>{props.tittle} Dashboard</h1><hr/>

//         <div className='row mt-5'>
//             {/* left side dashboard */}
//             <div className='col-md-6'>
//                     <div class="card Dash-Card" style={{width: "18rem;"}}>
//   <div class="card-body">
//     <div className='row'>
//         <div className='col-md-8'>
//     <h6 class="card-subtitle mb-2 text-muted">Total Value</h6>
//     <h5 class="card-title">$2,345.00</h5>
//     <ul className='mt-0'>
//     <li className='para-list-dash'>
//     <div className='mini-box-dash '>+23.35%</div>

//     </li>
//     <li className='para-list-dash ml-0'>
//     <p className='ml-2'> 
//     From Last Month
//     </p>

//     </li>
//     </ul>
// </div>
//         <div className='col-md-4'>
//         <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-graph-up graph-icon-dash " viewBox="0 0 16 16">
//   <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"/>
// </svg>
//         </div>

//     </div>

   
//   </div>
// </div>
//             <hr/>
//             <div class="card Dash-Card" style={{width: "18rem;"}}>
//   <div class="card-body">
//     <div className='row'>
//         <div className='col-md-8'>
//     <h6 class="card-subtitle mb-2 text-muted">Booked Trips</h6>
//     <h5 class="card-title">1,345</h5>
//     <ul className='mt-0'>
//     <li className='para-list-dash'>
//     <div className='mini-box-dash-2 '>+3.98%</div>

//     </li>
//     <li className='para-list-dash ml-0'>
//     <p className='ml-2'> 
//     From Last Month
//     </p>

//     </li>
//     </ul>
// </div>
//         <div className='col-md-4 '>
//         <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-cloud-lightning-fill cloud-dash" viewBox="0 0 16 16">
//   <path d="M7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724zm6.352-7.249a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973"/>
// </svg>  <br/><p className='text-muted w-100 mt-0 ml-0'>
// Rain Chances<b> 80%</b></p>
//         </div>

//     </div>

   
//   </div>
// </div>
// <hr/>
            


//             </div>
//             {/* right side dashboard */}
//             <div className='col-md-6 border-left'>
//             <div class="card Dash-Card" style={{width: "18rem;"}}>
//   <div class="card-body">
//     <div className='row'>
//         <div className='col-md-8'>
//     <h6 class="card-subtitle mb-2 text-muted">Sales</h6>
//     <h5 class="card-title">$3,339.00</h5>
//     <ul className='mt-0'>
//     <li className='para-list-dash'>
//     <div className='mini-box-dash-3 '>-12.21%</div>

//     </li>
//     <li className='para-list-dash ml-0'>
//     <p className='ml-2'> 
//     From Last Month
//     </p>

//     </li>
//     </ul>
// </div>
//         <div className='col-md-4'>
//         <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-cash-coin text-success" viewBox="0 0 16 16">
//   <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
//   <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
//   <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
//   <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
// </svg>
//         </div>

//     </div>

   
//   </div>
// </div>
// <hr/>
// <div class="card Dash-Card" style={{width: "18rem;"}}>
//   <div class="card-body">
//     <div className='row'>
//         <div className='col-md-8'>
//     <h6 class="card-subtitle mb-2 text-muted">Bookings</h6>
//     <h5 class="card-title">3,45.00</h5>
//     <ul className='mt-0'>
//     <li className='para-list-dash'>
//     <div className='mini-box-dash-4 '>+5.15%</div>

//     </li>
//     <li className='para-list-dash ml-0'>
//     <p className='ml-2'> 
//     From Last Month
//     </p>

//     </li>
//     </ul>
// </div>
//         <div className='col-md-4'>
//         <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-bar-chart-line barchart-icon-dash" viewBox="0 0 16 16">
//   <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1zm1 12h2V2h-2zm-3 0V7H7v7zm-5 0v-3H2v3z"/>
// </svg>
//         </div>

//     </div>

   
//   </div>
// </div>
// <hr/>  
//             </div>
//         </div>
//         </div>

// <div className='container'>
//   <div className='row'>
//     <div className='col-md-12'>
//     <div class="sales-chart-container" id="sales-chart-container">

// <div class="sales-line-chart">
//     <h2>Sales Last Month</h2>
//     <canvas id="lineChart"></canvas>
// </div>

// </div>
//     </div>
//   </div>
// </div>
 



// <TourDetails/>


// {/* map  */}
// <div className="container-fluid">
//     <div className="row">
//         <div className="col-md-12">
//             <Location/>
//         </div>
//     </div>
// </div>

//     </div>
//   )
// }

// export default DashboardMain





import React from 'react';
import Location from '../../components/Location';
import DashboardFooter from './DashboardFooter';
import TourDetails from './TourDetails';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import Profile from '../UserDashboard/Profile';
import Produts from './Produts';
import TripOnGo from './TripOnGo';

// Register chart.js components
ChartJS.register(LineElement, PointElement, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

const DashboardMain = () => {

  // Line chart data and options
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      label: 'Sales',
      data: [3000, 4000, 2000, 5000, 7000, 8000, 9000],
      borderColor: '#C3360C',
      fill: false
    }]
  };

  // Pie chart data
  const pieData = {
    labels: ['Completed Trips', 'Pending Trips', 'Cancelled Trips'],
    datasets: [{
      label: 'Trips',
      data: [60, 30, 10],
      backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384']
    }]
  };

  // Bar chart data
  const barData = {
    labels: ['New York', 'London', 'Paris', 'Tokyo', 'Berlin'],
    datasets: [{
      label: 'Bookings',
      data: [2000, 1500, 3000, 4000, 2500],
      backgroundColor: '#C3360C'
    }]
  };

  // Chart options (optional)
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <div className='container dash-conainer'>
        
        <h1  id='dashboard' >Admin Dashboard</h1>
        <hr />

        <div className='row mt-5'>
          {/* Left side dashboard */}
          <div className='col-md-6'>
 
          <div className='sales-chart-container '>
              {/* <h2>City Bookings</h2> */}
              <Bar data={barData} options={options} height={200} />
            </div>

          </div>

          {/* Right side dashboard */}
          <div className='col-md-6 border-left'>
             <div class="card Dash-Card" style={{width: "18rem;"}}>
   <div class="card-body">
     <div className='row'>
         <div className='col-md-8'>
     <h6 class="card-subtitle mb-2 text-muted">Sales</h6>
     <h5 class="card-title">$3,339.00</h5>
     <ul className='mt-0'>
    <li className='para-list-dash'>
     <div className='mini-box-dash-3 '>-12.21%</div>
     </li>
     <li className='para-list-dash ml-0'>
     <p className='ml-2'> 
     From Last Month
     </p>
     </li>
     </ul>
 </div>
         <div className='col-md-4'>
         <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-cash-coin text-success" viewBox="0 0 16 16">
   <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
   <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
   <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
   <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
 </svg>
        </div>
     </div>
   </div>
 </div>
<hr/>
 <div class="card Dash-Card" style={{width: "18rem;"}}>
   <div class="card-body">
     <div className='row'>
         <div className='col-md-8'>
     <h6 class="card-subtitle mb-2 text-muted">Bookings</h6>
     <h5 class="card-title">3,45.00</h5>
    <ul className='mt-0'>
     <li className='para-list-dash'>
     <div className='mini-box-dash-4 '>+5.15%</div>
     </li>
     <li className='para-list-dash ml-0'>
     <p className='ml-2'> 
     From Last Month
     </p>
     </li>
     </ul>
 </div>
         <div className='col-md-4'>
         <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-bar-chart-line barchart-icon-dash" viewBox="0 0 16 16">
   <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1zm1 12h2V2h-2zm-3 0V7H7v7zm-5 0v-3H2v3z"/>
 </svg>
        </div>
     </div>
   </div>
 </div>
            </div>
        </div>
      </div>
            {/* Line chart */}
      <div id='sales' className='sales-chart-container2  p-5 '>
              <h2 className='' >Sales Last Month</h2>
              <Line data={lineData} options={options} height={200} />
            </div>

      {/* <TourDetails /> */}
      <TripOnGo/>

<div className='container'>
  <div className='row'>
        {/* Bar chart */}
    <div className='col-md-6 border-right'>

    <div class="card Dash-Card "  style={{width: "18rem;"}}>
   <div class="card-body">
     <div className='row'>
         <div className='col-md-8'>
     <h6 class="card-subtitle mb-2 text-muted">Total Value</h6>
     <h5 class="card-title">$2,345.00</h5>
     <ul className='mt-0'>
     <li className='para-list-dash'>
     <div className='mini-box-dash '>+23.35%</div>

     </li>
     <li className='para-list-dash ml-0'>
     <p className='ml-2'> 
     From Last Month
     </p>

     </li>
     </ul>
 </div>
         <div className='col-md-4'>
         <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-graph-up graph-icon-dash " viewBox="0 0 16 16">
   <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"/>
 </svg>
         </div>

     </div>

   
   </div>
 </div>
             <hr/>
             <div class="card Dash-Card" style={{width: "18rem;"}}>
   <div class="card-body">
     <div className='row'>
        <div className='col-md-8'>
     <h6 class="card-subtitle mb-2 text-muted">Booked Trips</h6>
     <h5 class="card-title">1,345</h5>
     <ul className='mt-0'>
     <li className='para-list-dash'>
     <div className='mini-box-dash-2 '>+3.98%</div>
     </li>
     <li className='para-list-dash ml-0'>
     <p className='ml-2'> 
     From Last Month
     </p>

     </li>
     </ul>
 </div>
         <div className='col-md-4 '>
         <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-cloud-lightning-fill cloud-dash" viewBox="0 0 16 16">
   <path d="M7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724zm6.352-7.249a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973"/>
 </svg>  <br/><p className='text-muted w-100 mt-0 ml-0'>
 Rain Chances<b> 80%</b></p>
         </div>

     </div>

   
   </div>
 </div>

        

    </div>
            {/* Pie chart */}
    <div className='col-md-6'>
            <div id='revenue' className='sales-chart-container mt-5'>
              {/* <h2>Trip Analysis</h2> */}
              <Pie data={pieData} options={options} height={200} />
            </div>

    </div>
  </div>
</div>
      {/* Additional components like TourDetails and Location */}
      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Location />
          </div>
        </div>
      </div> */}
      {/* <Profile/> */}
      <Produts/>
      <DashboardFooter/>
    </div>
  );
}

export default DashboardMain;
