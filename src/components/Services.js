import React from 'react';
import service1 from '../images/services/service1.webp'
import service2 from '../images/services/service2.webp'
import service3 from '../images/services/service3.webp'
import service6 from '../images/services/service6.webp'
import icon1 from '../images/services/service-icon1.webp'
import icon2 from '../images/services/service-icon2.webp'
import icon3 from '../images/services/service-icon3.webp'
import icon4 from '../images/services/service-icon4.webp'



const Services = () => {
  return (
    
    <section id="services" class="services_wrapper">
        <div className="container">
            <div class="row">
                <div class="col-sm-12 section-title text-center mb-5">
                    <h6>We Are Here For You</h6>
                    <h3>Our Awesome Services</h3>
                </div>
            </div>
            <div class="row align-items-center service-item-wrap">
                <div class="col-lg-7 p-lg-0">
                    
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade active show" id="spa" role="tabpanel">
                           <img src={service1} alt='logo'/>
                        </div>
                        <div class="tab-pane fade" id="restaurent" role="tabpanel">
                           <img src={service2} alt='logo'/>
                        </div>
                        <div class="tab-pane fade" id="swimming" role="tabpanel">
                           <img src={service3} alt='logo'/>
                        </div>
                        <div class="tab-pane fade" id="conference" role="tabpanel">
                           <img src={service6} alt='logo'/>
                        </div>
                    </div>
                    
                </div>
                <div class="col-lg-5 position-relative">
                    
                    <div class="service-menu-area">
                        <ul class="nav">
                            <li>
                                <a data-bs-toggle="tab" href="*spa">
                                    <span class="service-icon">
                                       <img src={icon1} alt='logo'/>
                                    </span>
                                    <h5>Spa, beauty and Health</h5>
                                    <p><span>Spa and beauty </span>luptatem quia voluptas sit aspernatur aut odit aut
                                        fugit, sed quia </p>
                                </a>
                            </li>
                            <li>
                                <a data-bs-toggle="tab" href="*restaurent">
                                    <span class="service-icon">
                                       <img src={icon2} alt='logo'/>
                                    </span>
                                    <h5>Restaurant</h5>
                                    <p><span>Restaurant</span> lup provide grro tatem quia voluptas sit aspernatur aut
                                        odit aut fugit, </p>
                                </a>
                            </li>
                            <li>
                                <a data-bs-toggle="tab" href="*swimming">
                                    <span class="service-icon">
                                       <img src={icon3} alt='logo'/>
                                    </span>
                                    <h5>Swimming Pool</h5>
                                    <p><span>Swimming</span> pool luptatem quia voluptas sit aspernatur aut odit aut
                                        fugit, sed quia </p>
                                </a>
                            </li>
                            <li>
                                <a data-bs-toggle="tab" href="*conference">
                                    <span class="service-icon">
                                        <img src={icon4} alt='logo'/>
                                    </span>
                                    <h5>Conference Hall</h5>
                                    <p><span>Conference</span> luptatem quia voluptas sit aspernatur aut odit aut fugit,
                                        sed quia </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                   
                </div>
            </div>
        </div>

    </section>
  )
}

export default Services