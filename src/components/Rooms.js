import React from 'react'
import gallery1 from '../images/gallery/1.webp'
import gallery2 from '../images/gallery/2.webp'
import gallery3 from '../images/gallery/3.webp'
import gallery4 from '../images/gallery/4.webp'
import gallery5 from '../images/gallery/5.webp'
import gallery6 from '../images/gallery/6.webp'

const Rooms = () => {
  return (

    <section id="gallery" class="gallery_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 section-title text-center mb-5">
                    <h6>Best Pictures Of Our Hotel</h6>
                    <h3>Our Gallery</h3>
                </div>
            </div>
            <div class="row g-0">
                <div class="col-lg-3 col-md-6 gallery-item">
                    <img src={gallery1} class="img-fluid w-100" alt='logo'/>
                    <div class="gallery-item-content"></div>
                </div>
                <div class="col-lg-3 col-md-6 gallery-item">
                    <img src={gallery2} class="img-fluid w-100" alt='logo'/>
                    <div class="gallery-item-content"></div>
                </div>
                <div class="col-lg-3 col-md-6 gallery-item">
                    <img src={gallery3} class="img-fluid w-100" alt='logo'/>
                    <div class="gallery-item-content"></div>
                </div>
                <div class="col-lg-3 col-md-6 gallery-item">
                    <img src={gallery4} class="img-fluid w-100" alt='logo'/>
                    <div class="gallery-item-content"></div>
                </div>
                <div class="col-md-6 gallery-item">
                    <img src={gallery5} class="img-fluid w-100" alt='logo'/>
                    <div class="gallery-item-content"> </div>
                </div>
                <div class="col-md-6 gallery-item">
                    <img src={gallery6} class="img-fluid w-100" alt='logo'/>
                    <div class="gallery-item-content"> </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Rooms