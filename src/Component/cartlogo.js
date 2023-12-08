import React from 'react'
import './Banner.css'
import '../Mediaquery.css'
import Image1 from '../Image/perumal_auto_x2.jpg'
function Cartlogo() {
    return (
        <>
            <div className='container'>
                <div className='row cardslogo' data-aos="flip-right">
                    <div className='col-lg-3 col-xl-3 col-md-3 col-xs-12 col-sm-12 col-xxl-3 '>
                        <div className="hover">
                            <div className="card my-card bg-light ">
                                <div className="mt-2 text-center">
                                    <i className="fa fa-search search  " aria-hidden="true"></i>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Plan Your Trip</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-3 col-xl-3 col-md-3 col-xs-12 col-sm-12 col-xxl-3 '>
                        <div className="hover ">
                            <div className="card my-card bg-light ">
                                <div className="mt-2 text-center">
                                    <i className="fa fa-list search" aria-hidden="true"></i>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Choose a Package</h5>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='col-lg-3 col-xl-3 col-md-3 col-xs-12 col-sm-12 col-xxl-3 '>
                        <div className="hover">
                            <div className="card my-card bg-light ">
                                <div className="mt-2 text-center">
                                    <i class="fa fa-globe search" aria-hidden="true"></i>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Divine Darshan</h5>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='col-lg-3 col-xl-3 col-md-3 col-xs-12 col-sm-12 col-xxl-3 '>
                        <div className="hover">
                            <div className="card my-card bg-light ">
                                <div className="mt-2 text-center">
                                    <i class="fa fa-headphones search" aria-hidden="true"></i>

                                    <div className="card-body">
                                        <h5 className="card-title text-center">24/7 Customer Support</h5>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


<br/>
<br/>


<div className='container'>
                <div className='row'>
                <h3 className="text-center my-4 package-title ">Chennai to Tirupati Packages</h3>

                </div>
                <br/>
                <div className='mediumdevice' data-aos="flip-left">
                <div className='row'>
                    <div className='col-md-12 col-lg-6 col-xl-6 col-xxl-6 col-xs-12 col-sm-12 d-flex align-items-center justify-content-center'>
                        <img src={Image1} className='img-fluid rounded w-100 ' />
                    </div>
                  
                    <div className='col-md-12 col-lg-6 col-xl-6 col-xxl-6 col-xs-12 col-sm-12 mt-5'>
  <div className="list-group mt-5">
    <a href="#" className="list-group-item list-group-item-action">
      <span className="badge bg-success">&#10003;</span> Early Morning Around 5.00 to 5.30 AM Door Step Boarding Point At Chennai Circle
    </a>
    <a href="#" className="list-group-item list-group-item-action">
      <span className="badge bg-success">&#10003;</span> Rs.300/- Special Segara Darshan Ticket Bookings
    </a>
    <a href="#" className="list-group-item list-group-item-action">
      <span className="badge bg-success">&#10003;</span> Complementary Breakfast & Lunch
    </a>
    <a href="#" className="list-group-item list-group-item-action">
      <span className="badge bg-success">&#10003;</span> Tirupati Balaji Darshan & Padmavathy Temple Darshan
    </a>
    <a href="#" className="list-group-item list-group-item-action">
      <span className="badge bg-success">&#10003;</span> After Complete Blessing Darshan Tours Ends With Balaji One Day Darshan Package From Chennai
    </a>
  </div>
</div>

                </div>
            </div>
</div>
            

<br/>
<br/>

        </>
    )
}

export default Cartlogo
