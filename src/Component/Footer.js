import React from 'react'
import './Banner.css'
import '../App.css'
import Reach from '../Image/icons8-arrow-90.png'
import Call from '../Image/icons8-call-90.png';
import Mail from '../Image/icons8-mail-90.png';

export default function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-lg-3 col-xl-3 col-xxl-3 col-md-3 col-xs-12 col-sm-12'>

                            <div className='mt-5'>
                                <h5 className='text-white footertitle fw-bold text-uppercase'>
                                    Disclaimer
                                </h5>
                                <div className='row'>
                                    <p className='text-white '>
                                        We are serving help to devotees Divine Balaji darshan. We have not authorized partners for any Official temple or Tirupati Temples.

                                    </p>
                                </div>
                                <div className='row'>
                                    <p className='text-white '>
                                        Reach Us <img src={Reach} alt="Reach Icon" className='img-fluid reachicon' />

                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className='col-lg-3 col-xl-3 col-xxl-3 col-md-3 col-xs-12 col-sm-12 text-left'>
                            <div className='mt-5'>
                                <h5 className='text-white footertitle fw-bold  mx-3 text-uppercase'>
                                    Information
                                </h5>
                                <ul className="list-group ">
                                    <li className="list-group-item bg-transparent border-0 text-white  ">
                                        <img src={Reach} alt="Reach Icon" className='img-fluid reachicon' />Special Darshan Tickets</li>
                                    <li className="list-group-item bg-transparent border-0 text-white ">
                                        <img src={Reach} alt="Reach Icon" className='img-fluid reachicon' />Seva Darshan Tickets</li>
                                    <li className="list-group-item bg-transparent border-0 text-white ">
                                        <img src={Reach} alt="Reach Icon" className='img-fluid reachicon' />Accommodation Services</li>
                                    <li className="list-group-item bg-transparent border-0 text-white ">
                                        <img src={Reach} alt="Reach Icon" className='img-fluid reachicon' />
                                        Tirumala Darshan Timings</li>
                                    <li className="list-group-item bg-transparent border-0 text-white ">
                                        <img src={Reach} alt="Reach Icon" className='img-fluid reachicon' />Best Price Guarantee</li>
                                    <li className="list-group-item bg-transparent border-0 text-white ">
                                        <img src={Reach} alt="Reach Icon" className='img-fluid reachicon' />Privacy & Cookies Policy</li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-lg-3 col-xl-3 col-xxl-3 col-md-3 col-xs-12 col-sm-12 text-left'>
                            <div className='mt-5'>
                                <h5 className='text-white footertitle fw-bold mx-3 text-uppercase'>
                                    Customer support
                                </h5>
                                <ul className="list-group ">
                                    <li className="list-group-item bg-transparent border-0 text-white  ">
                                        <img src={Reach} alt="Reach Icon" className='img-fluid reachicon' />FAQ</li>
                                    <li className="list-group-item bg-transparent border-0 text-white ">
                                        <img src={Reach} alt="Reach Icon" className='img-fluid reachicon' />Payment option</li>
                                    <li className="list-group-item bg-transparent border-0 text-white ">
                                        <img src={Reach} alt="Reach Icon" className='img-fluid reachicon' />Booking Tips</li>
                                    <li className="list-group-item bg-transparent border-0 text-white ">
                                        <img src={Reach} alt="Reach Icon" className='img-fluid reachicon' />
                                        Tirumala Darshan Timings</li>
                                    <li className="list-group-item bg-transparent border-0 text-white ">
                                        <img src={Reach} alt="Reach Icon" className='img-fluid reachicon' />How it works ?</li>
                                    <li className="list-group-item bg-transparent border-0 text-white ">
                                        <img src={Reach} alt="Reach Icon" className='img-fluid reachicon' />Contact us</li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-lg-3 col-xl-3 col-xxl-3 col-md-3 col-xs-12 col-sm-12 text-left'>
                            <div className='mt-5'>
                                <h5 className='text-white footertitle fw-bold mx-3 text-uppercase'>
                                    Have Questions Darshan
                                </h5>
                            </div>
<div className='footercenter '>
<div className='row d-flex'>
                                
                                <p className='text-white '>
                                <img src={Call} className='img-fluid calls' />
                                +91-90435-49091
                                 </p>
                             </div>
 
                             <div className='row d-flex'>
                                 
                                 <p className='text-white '>
                                 <img src={Mail} className='img-fluid calls ' />
                                 ttdpackages@gmail.com
                                  </p>
                              </div>
</div>
                           
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
