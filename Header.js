import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Header = (props) => {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-light   ">
  <Link class="navbar-brand" to="/">
  <img class="logoimg" src="/Assects/images/companylogo.png" alt="Logo" />
  </Link>
  <button class="navbar-toggler bg-transparent w-25" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ">
      <li class="nav-item active">
        <Link class="nav-link ml-1 " to="/">{props.home} </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link ml-1" to="/about">{props.about}</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link ml-1" to="/pricing">{props.pricing}</Link>
      </li>
      {/* <li class="nav-item">
        <Link class="nav-link ml-1" to="/gallery">{props.gallary}</Link>
      </li> */}
      <li class="nav-item">
        <Link class="nav-link ml-1" to="/shop">Shop</Link>
      </li>  
      {/* <li class="nav-item">
        <Link class="nav-link ml-1" to="/booking">Booking</Link>
        </li> */}
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle ml-1" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
{props.exspots}
        </a>
        <div class="dropdown-menu ">
          <Link class="dropdown-item bg-transparent" to="/naran">Naran</Link>
          <Link class="dropdown-item bg-transparent" to="/swat">Swat</Link>
          <Link class="dropdown-item bg-transparent" to="/sakardu">Sakardu</Link>
          <Link class="dropdown-item bg-transparent" to="/fairy">Fairy Meadows</Link>
        </div>
      </li>
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle ml-1" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
{props.valley}
        </a>
        <div class="dropdown-menu ">
         
        <Link class="dropdown-item bg-transparent" to="/kashmir">Kashmir Valley</Link>
          {/* <Link class="dropdown-item bg-transparent" to="/userdashboard">Kumrat Valley</Link> */}
          <Link class="dropdown-item bg-transparent" to="/kalash">Kalash Valley</Link>

          <Link class="dropdown-item bg-transparent" to="/baltit">Baltit Fort</Link>
          {/* <Link class="dropdown-item bg-transparent" to="/userdashboard">User Dashboard</Link> */}
          {/* <Link class="dropdown-item bg-transparent" to="/admin">Admin Dashboard</Link> */}



        </div>
      </li>
        <li class="nav-item">
          <Link class="nav-link ml-1" to="/blog">{props.blogs}</Link>
        </li>

    
{/* login  */}

      <li class="nav-item n-icon ml-5 mt-1">
      <Link class="p-1  button " to="/login">
<svg  xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
</Link>
      </li>
{/* signup  */}

      <li class="nav-item  mt-1">
      <Link class="p-1  ml-2 button " to="/signup">
<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-fill-add" viewBox="0 0 16 16">
<path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
<path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
</svg>
</Link>
      </li>
{/* shop  */}

   
{/* booking  */}

      {/* <li class="nav-item ml-2">
      <Link class="p-1 ml-2 button" to="/booking">

<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-box-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"/>
</svg>
</Link>
      </li> */}
    
    </ul>
    {/* <div class="button-container text-center">





  </div> */}
  </div>
</nav>
    </>
  )
}

export default Header
