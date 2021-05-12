
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';


// i have imported all the text from the PHP website and thus there are so many divs and extra classes which arent even relevant

function ContactUs() {
  return (
      <div>
            <section className="wow fadeIn bg-light-gray padding-35px-tb page-title-small top-space " style = {{marginTop:"15vh"}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-8 col-md-6 text-center text-md-left">
                            <h1 className="alt-font text-extra-dark-gray font-weight-600 mb-0 text-uppercase" style={{color:"#FFFFFF"}}>Contact Us </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="wow fadeIn big-section">

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8 text-center">
                        <span className="alt-font text-small text-uppercase">We would love to serve you</span>
                        <h2 className="alt-font font-weight-700 letter-spacing-minus-1 text-extra-dark-gray">Feel free to get in touch with us</h2>
                        <p className="width-75 mx-auto sm-width-100">Call our toll free number to get in touch with our customer care executives! <br/>Let&apos;s Talk: 18002674674 | Email Us: operations@techguyservice.com</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="no-padding bg-extra-dark-gray">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-6 p-0 cover-background md-height-450px sm-height-350px wow fadeInLeft" style={{background : "url(images/contact-img2.jpg)"}}></div>
                    <div className="col-12 col-lg-6 p-0 wow fadeInRight">
                        <div className="row m-0">
                            <div className="col-12 col-md-6 bg-extra-dark-gray d-flex flex-column justify-content-center align-items-center text-center height-350px last-paragraph-no-margin">
                                <i className="icon-map text-deep-pink icon-medium margin-25px-bottom"></i>
                                <div className="text-white-2 text-uppercase alt-font font-weight-600 margin-5px-bottom">Contact Address</div>
                                <p className="width-60 lg-width-80 mx-auto text-medium">D 176 Oshiwara Industrial Estate, Oshiwara, Mumbai 400102</p>
                            </div>
                            <div className="col-12 col-md-6 bg-black d-flex flex-column justify-content-center align-items-center text-center height-350px last-paragraph-no-margin">
                                <i className="icon-chat text-deep-pink icon-medium margin-25px-bottom"></i>
                                <div className="text-white-2 text-uppercase alt-font font-weight-600 margin-5px-bottom">Let&apos;s Talk</div>
                                <p className="mx-auto text-medium mb-0">Toll Free No.: <a href="tel:18002674674">18002674674</a></p>
                            </div>
                            <div className="col-12 col-md-6 bg-black d-flex flex-column justify-content-center align-items-center text-center height-350px last-paragraph-no-margin">
                                <i className="icon-envelope text-deep-pink icon-medium margin-25px-bottom"></i>
                                <div className="text-white-2 text-uppercase alt-font font-weight-600 margin-5px-bottom">Email Us</div>
                                <p className="mx-auto text-medium mb-0"><a href="mailto:operations@techguyservice.com">operations@techguyservice.com</a></p>
                            </div>
                            <div className="col-12 col-md-6 bg-extra-dark-gray d-flex flex-column justify-content-center align-items-center text-center height-350px last-paragraph-no-margin">
                                <i className="icon-clock text-deep-pink icon-medium margin-25px-bottom"></i>
                                <div className="text-white-2 text-uppercase alt-font font-weight-600 margin-5px-bottom">Working Hours</div>
                                <p className="mx-auto text-medium mb-0">10 AM TO 6 PM (Monday to Saturday, Sundays Off</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* <section className="wow fadeIn bg-light-gray2">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center social-style-4">
                        <span className="text-medium font-weight-600 text-uppercase d-block alt-font text-extra-dark-gray margin-30px-bottom">On social networks</span>
                        <div className="social-icon-style-4">
                            <ul className="margin-30px-top large-icon">
                                <li><a className="facebook" href="https://www.facebook.com/Tech-Guy-Services-101949501928756/" ><i className="fab fa-facebook-f"></i><span></span></a></li>
                                <li><a className="twitter" href="https://twitter.com/servicestechguy?s=11" ><i className="fab fa-twitter"></i><span></span></a></li>
                                <li><a className="google" href="https://www.linkedin.com/company/techguy-service" ><i className="fab fa-linkedin-in"></i><span></span></a></li>
                                <li><a className="linkedin" href="https://www.instagram.com/techgservice/" ><i className="fab fa-instagram"></i><span></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>     */}
    

      </div>

    
       
    
  );
}

export default ContactUs;



















