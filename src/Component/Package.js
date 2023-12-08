import React from 'react'

import './Package.css'
import image1 from '../Image/people.jpg'
import image2 from '../Image/t1.jpg'
import image3 from '../Image/t2.jpg'
import image4 from '../Image/t4.jpg'

export default function Package() {

    
  return (
    <>
    
    <br/>
    <div className="container">
        <div className="row"  >
            <h3 className="text-upper text-center fw-bold"> Hightlights of Chennai to Tirupati Package
            </h3>
        </div>
        <div className='row'>
            <p className='text-center content'>

            Our drivers are experienced with routes and all the sightseeing places in Tirupati. Our team of planners is ready to help you around the clock. Book your one day Tirupati Package from Chennai now
            </p>
        </div>
    </div>

    <div className='container'>
        
        <div className='row' data-aos="zoom-in">
           
        

        <div className='col-lg-3 col-xl-3 col-xxl-3 col-md-3 col-xs-12 col-sm-12'>
    <div className="card shadow position-relative">
      <img src={image1} className="card-img-top" alt="Card Image" />
      <div className="card-content mt-3 text-center">
        <h5 className="card-title fw-bold">Rs.300/- Special Entry Darshan</h5>
      </div>
      <div className="overlay">
        <p className="overlay-message badge bg-danger">Exclusive</p>
      </div>
    </div>
  </div>

  <div className='col-lg-3 col-xl-3 col-xxl-3 col-md-3 col-xs-12 col-sm-12'>
    <div className="card shadow position-relative">
      <img src={image2} className="card-img-top" alt="Card Image" />
      <div className="card-content mt-3 text-center">
        <h5 className="card-title fw-bold">One Day Tirupati Packages</h5>
      </div>
      <div className="overlay">
        <p className="overlay-message badge bg-danger">Exclusive</p>
      </div>
    </div>
  </div>

  <div className='col-lg-3 col-xl-3 col-xxl-3 col-md-3 col-xs-12 col-sm-12'>
    <div className="card shadow position-relative">
      <img src={image3} className="card-img-top" alt="Card Image" />
      <div className="card-content mt-3 text-center">
        <h5 className="card-title fw-bold"> Tirumala Tirupati Package </h5>
      </div>
      <div className="overlay">
        <p className="overlay-message badge bg-danger">Exclusive</p>
      </div>
    </div>
  </div>

  <div className='col-lg-3 col-xl-3 col-xxl-3 col-md-3 col-xs-12 col-sm-12'>
    <div className="card shadow position-relative">
      <img src={image4} className="card-img-top" alt="Card Image" />
      <div className="card-content mt-3 text-center">
        <h5 className="card-title  fw-bold">Shree Balaji Segara Darshanam </h5>
      </div>
      <div className="overlay">
        <p className="overlay-message badge bg-danger">Exclusive</p>
      </div>
    </div>
  </div>


  
          


        </div>
    </div>
    </>
  )
}
