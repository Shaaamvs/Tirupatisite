



import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css';
import '../Mediaquery.css'
const CenterMode = () => {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    centerPadding: 0,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600, // XXL
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 1200, // XL
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
    ],
  };



  return (

  <>
  
  <Slider {...settings} className="mobilecentermode">
    
    <div >
    <div className="container ">
          <div className="row ">
            <div className="col-lg-3 col-xl-3 col-md-12 col-xs-12 col-xxl-3 col-sm-12">
              <div className="card w-100 border-0 shadow p-3 mb-2 bg-body rounded ">
                <div className="row">
                  <div className="name">
                    <div className="namestart">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>

                    <div className="row mt-2">
                      <p className="text-muted fw-bold ">Very Good Service Tirupati Balaji Travels On Time Pick and Drop Driver is Very Kind and support with us</p>
                    </div>

                    <div className="row mt-2">
                      <h5 className="names text-center">DhanaLakshmi</h5>
                    </div>

                    <div className="row mt-2">
                      <h5 className="font-weight-bold text-center city">Chennai</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="col-lg-3 col-xl-3 col-md-12 col-xs-12 col-xxl-3 col-sm-12">
              <div className="card  w-100 border-0 shadow p-3 mb-2 bg-body rounded ">
                <div className="row">
                  <div className="name">
                    <div className="namestart">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>

                    <div className="row mt-2">
                      <p className="text-muted fw-bold ">The best experience of touring in Balaji Darshan. Services were very good, hotels, vehicle, especially the driver. Keep up the good work</p>
                    </div>

                    <div className="row mt-2">
                      <h5 className="names text-center">Suba</h5>
                    </div>

                    <div className="row mt-2">
                      <h5 className="font-weight-bold text-center city">Deli</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xl-3 col-md-12 col-xs-12 col-xxl-3 col-sm-12">
              <div className="card w-100 border-0 shadow p-3 mb-2 bg-body rounded">
                <div className="row">
                  <div className="name">
                    <div className="namestart">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>

                    <div className="row mt-2">
                      <p className="text-muted fw-bold">Trip was Well planned, arranged by the team. One major drawback in Tamil Nadu is language problem. I think team has to arrange for drivers, guide who can speak Tamil, English and any other Indian language</p>
                    </div>

                    <div className="row mt-2">
                      <h5 className="names text-center">Sunil Kumar</h5>
                    </div>

                    <div className="row mt-2">
                      <h5 className="font-weight-bold text-center city">Mumbai</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xl-3 col-md-12 col-xs-12 col-xxl-3 col-sm-12">
              <div className="card w-100 border-0 shadow p-3 mb-2 bg-body rounded ">
                <div className="row">
                  <div className="name">
                    <div className="namestart">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>

                    <div className="row mt-2">
                      <p className="text-muted fw-bold ">Best Tour Operator i am very impressive to going Tirupati temples around Chennai with 2day</p>
                    </div>

                    <div className="row mt-2">
                      <h5 className="names text-center">Gaurav Maid </h5>
                    </div>

                    <div className="row mt-2">
                      <h5 className="font-weight-bold text-center city">Delhi</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    
      <div className="mediumsmalldevice" >
    <div className="container ">
          <div className="row ">
            <div className="col-lg-3 col-xl-3 col-md-12 col-xs-12 col-xxl-3 col-sm-12">
              <div className="card w-100 border-0 shadow p-3 mb-2 bg-body rounded ">
                <div className="row">
                  <div className="name">
                    <div className="namestart">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>

                    <div className="row mt-2">
                      <p className="text-muted fw-bold ">Very Good Service Tirupati Balaji Travels On Time Pick and Drop Driver is Very Kind and support with us</p>
                    </div>

                    <div className="row mt-2">
                      <h5 className="names text-center">DhanaLakshmi</h5>
                    </div>

                    <div className="row mt-2">
                      <h5 className="font-weight-bold text-center city">Chennai</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="col-lg-3 col-xl-3 col-md-12 col-xs-12 col-xxl-3 col-sm-12">
              <div className="card  w-100 border-0 shadow p-3 mb-2 bg-body rounded ">
                <div className="row">
                  <div className="name">
                    <div className="namestart">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>

                    <div className="row mt-2">
                      <p className="text-muted fw-bold ">The best experience of touring in Balaji Darshan. Services were very good, hotels, vehicle, especially the driver. Keep up the good work</p>
                    </div>

                    <div className="row mt-2">
                      <h5 className="names text-center">Suba</h5>
                    </div>

                    <div className="row mt-2">
                      <h5 className="font-weight-bold text-center city">Deli</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xl-3 col-md-12 col-xs-12 col-xxl-3 col-sm-12">
              <div className="card w-100 border-0 shadow p-3 mb-2 bg-body rounded">
                <div className="row">
                  <div className="name">
                    <div className="namestart">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>

                    <div className="row mt-2">
                      <p className="text-muted fw-bold">Trip was Well planned, arranged by the team. One major drawback in Tamil Nadu is language problem. I think team has to arrange for drivers, guide who can speak Tamil, English and any other Indian language</p>
                    </div>

                    <div className="row mt-2">
                      <h5 className="names text-center">Sunil Kumar</h5>
                    </div>

                    <div className="row mt-2">
                      <h5 className="font-weight-bold text-center city">Mumbai</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xl-3 col-md-12 col-xs-12 col-xxl-3 col-sm-12">
              <div className="card w-100 border-0 shadow p-3 mb-2 bg-body rounded ">
                <div className="row">
                  <div className="name">
                    <div className="namestart">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>

                    <div className="row mt-2">
                      <p className="text-muted fw-bold ">Best Tour Operator i am very impressive to going Tirupati temples around Chennai with 2day</p>
                    </div>

                    <div className="row mt-2">
                      <h5 className="names text-center">Gaurav Maid </h5>
                    </div>

                    <div className="row mt-2">
                      <h5 className="font-weight-bold text-center city">Delhi</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>



  </Slider>
  <div className="row  largedevice" >
            <div className="col-lg-3 col-xl-3 col-md-12 col-xs-12 col-xxl-3 col-sm-12">
              <div className="card w-100 border-0 shadow p-3 mb-2 bg-body rounded ">
                <div className="row">
                  <div className="name">
                    <div className="namestart">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>

                    <div className="row mt-2">
                      <p className="text-muted fw-bold ">Very Good Service Tirupati Balaji Travels On Time Pick and Drop Driver is Very Kind and support with us</p>
                    </div>

                    <div className="row mt-2">
                      <h5 className="names text-center">DhanaLakshmi</h5>
                    </div>

                    <div className="row mt-2">
                      <h5 className="font-weight-bold text-center city">Chennai</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="col-lg-3 col-xl-3 col-md-12 col-xs-12 col-xxl-3 col-sm-12">
              <div className="card  w-100 border-0 shadow p-3 mb-2 bg-body rounded ">
                <div className="row">
                  <div className="name">
                    <div className="namestart">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>

                    <div className="row mt-2">
                      <p className="text-muted fw-bold ">The best experience of touring in Balaji Darshan. Services were very good, hotels, vehicle, especially the driver. Keep up the good work</p>
                    </div>

                    <div className="row mt-2">
                      <h5 className="names text-center">Suba</h5>
                    </div>

                    <div className="row mt-2">
                      <h5 className="font-weight-bold text-center city">Deli</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xl-3 col-md-12 col-xs-12 col-xxl-3 col-sm-12">
              <div className="card w-100 border-0 shadow p-3 mb-2 bg-body rounded">
                <div className="row">
                  <div className="name">
                    <div className="namestart">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>

                    <div className="row mt-2">
                      <p className="text-muted fw-bold">Trip was Well planned, arranged by the team. One major drawback in Tamil Nadu is language problem. I think team has to arrange for drivers, guide who can speak Tamil, English and any other Indian language</p>
                    </div>

                    <div className="row mt-2">
                      <h5 className="names text-center">Sunil Kumar</h5>
                    </div>

                    <div className="row mt-2">
                      <h5 className="font-weight-bold text-center city">Mumbai</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xl-3 col-md-12 col-xs-12 col-xxl-3 col-sm-12">
              <div className="card w-100 border-0 shadow p-3 mb-2 bg-body rounded ">
                <div className="row">
                  <div className="name">
                    <div className="namestart">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>

                    <div className="row mt-2">
                      <p className="text-muted fw-bold ">Best Tour Operator i am very impressive to going Tirupati temples around Chennai with 2day</p>
                    </div>

                    <div className="row mt-2">
                      <h5 className="names text-center">Gaurav Maid </h5>
                    </div>

                    <div className="row mt-2">
                      <h5 className="font-weight-bold text-center city">Delhi</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  </>

   
 



  );
};

export default CenterMode;


