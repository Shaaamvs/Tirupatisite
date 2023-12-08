import React from 'react';
import './Banner.css';
import '../App.css';
import Booking from './Booking.js'
import Bannerimage from '../Image/banner.jpg'

function Banner() {
    return (
        <>
      <div className='container-fluid'>
    <div className='row'>
        <div className='backgroundimage'>
          {/* <img src={Bannerimage} className='img-fluid w-100 container-fluid'/> */}
            <div className='contentcenter'>
            <div className="row " >
    <div className='col-lg-6 col-md-6 col-xl-6 col-xxl-6 col-xs-12 col-sm-12' data-aos="fade-right">
        <div className='bannercenter'>
        <h3 className='text-left text-white' >
      Best Tirupati package from Chennai - <span className='Tirumala'>
      Tirumala Tirupati Bajaji Darsha</span> package
       </h3>
<div className='row'>
<h5 className='text-left text-white'>
       Chennai's No.1 Balaji Assured Darshan Packages More than 10,000 + Happy Customers
       </h5>
</div>
     

       <div className='row'>
       <div className="d-flex ">
      <button className="call-button">For Booking </button>
      <button className="call-button">Call Now  </button>
    </div>
       </div>
        </div>

     
    </div>

    <div className='col-lg-6 col-md-6 col-xl-6 col-xxl-6 col-xs-12 col-sm-12' data-aos="fade-left">
    <div className="container mt-5 shadow p-3 mb-5 bg-light text-dark rounded ">
      {/* <form onSubmit='https://formspree.io/f/xoqookdy' method='post'>
        <div className="mb-0">
          <label htmlFor="destination" className="form-label fw-bold">
            Enter a Name:
          </label>
          <input
            type="text"
            name='Full_Name'
            className="form-control fw-bold"
            id="destination"
            placeholder="Name"
          />
        </div>



        <div className="mb-0">
          <label htmlFor="destination" className="form-label fw-bold">
            Enter a Email:
          </label>
          <input
          name='Email'
            type="email"
            className="form-control fw-bold"
            id="destination"
            placeholder="Email"
          />
        </div>




        <div className="mb-0">
          <label htmlFor="destination" className="form-label fw-bold">
            Enter a Mobile No:
          </label>
          <input
          name='Phone Number'
            type="number"
            className="form-control fw-bold"
            id="destination"
            placeholder="Phone No"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="destination" className="form-label fw-bold">
            Pickup Address
          </label>
          <input
          name='Address'
            type="text"
            className="form-control fw-bold"
            id="destination"
            placeholder="Address"
          />
        </div>

        <div className="row">
          <div className="col-md-12">
            <label htmlFor="checkIn" className="form-label fw-bold">
              Check-in
            </label>
            <input type="date" className="form-control fw-bold" id="checkIn" name='CheckIn' />
          </div>
        
        </div>

       

     

        <button type="submit" className="call-button  mt-3 w-100 fw-bold">
         Book Now
        </button>
      </form> */}




      <Booking/>
    </div>
    </div>
</div>
            </div>


        </div>
    </div>
</div>
        
        
        </>
    )
}

export default Banner;