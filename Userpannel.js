import React from 'react';

const UserPanel = () => {
  return (
    <div>
      <div className='container p-2'>
        <div className="row">
          <h1 id='userdashboard' className="text-center mt-4 ">Welcome to the Tourist Dashboard</h1>
          <hr />
          
          {/* Welcome Section */}
          <div className='col-md-12'>
            <div className="alert alert-info text-center">
              <h3>Hello, Tourist! Plan your next adventure with us!</h3>
              <p>Your personal dashboard to view your bookings, manage your profile, and explore new trips.</p>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div id='profile' className='row mt-4'>
            <div className='col-md-4'>
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">View Booked Trips</h5>
                  <p className="card-text">See all the tours you've already booked.</p>
                  <a href='#booking'><button  className="btn btn-primary">View Trips</button></a>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">Explore New Tours</h5>
                  <p className="card-text">Find exciting new destinations and adventures.</p>
                 <a href='#Tour'> <button className="btn btn-success">Explore Tours</button></a>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">Update Profile</h5>
                  <p className="card-text">Manage your personal information and preferences.</p>
                <a href='#profile1'><button className="btn btn-warning">Update Profile</button></a>
                </div>
              </div>
            </div>
          </div>

          {/* Tour Recommendations */}
          <div className='col-md-12 mt-5'>
            <h3>Recommended Tours for You</h3>
            <hr />
            <div className='row'>
              <div className='col-md-4'>
                <div className="card">
                  <img src="/Assects/images/gallery-image-37.jpg" className="card-img-top" alt="Tour 1" />
                  <div className="card-body">
                    <h5 className="card-title">Naran Valley</h5>
                    <p className="card-text">Relax on  beautiful Lakes with this relaxing getaway.</p>
                    {/* <button className="btn btn-info">Book Now</button> */}
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
              <div className="card">
                  <img  src="/Assects/images/gallery-image-21.jpg" className="card-img-top " alt="Tour 3" />
                  <div className="card-body">
                    <h5 className="card-title">Exploration forests</h5>
                    <p className="card-text">Discover hidden gems in the jungel bustling streets.</p>
                    {/* <button className="btn btn-info">Book Now</button> */}
                  </div>
                </div>
            
              </div>
              <div className='col-md-4'>
              <div className="card">
                  <img src="/Assects/images/blog-image-7.jpg" className="card-img-top" alt="Tour 2" />
                  <div className="card-body">
                    <h5 className="card-title">Mountain Adventure</h5>
                    <p className="card-text">Explore the scenic mountains on this adventurous tour.</p>
                    {/* <button className="btn btn-info">Book Now</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserPanel;
