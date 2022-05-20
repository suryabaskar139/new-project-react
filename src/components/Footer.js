import React from 'react'
import footer1 from '../images/footer-logo.png';
import footer2 from '../images/payment.png';

const Footer = () => {
  return (
    
    <footer class="footer">
        <div class="container">
            <div class="row">


                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="footer-about">
                        <div class="footer-logo">
                            <a href="*"><img src={footer1}  alt='logo'/></a>
                        </div>
                        <p>The Customer is at the heart of our unique bussiness model, which include design.</p>
                        <a href="*"><img src={footer2}  alt='logo'/></a>
                    </div>
                </div>

                <div class="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                    <div class="footer-widget">
                        <h6>Shopping</h6>
                        <ul>
                            <li><a href="*">Clothing Store</a></li>
                            <li><a href="*">Trending Shoes</a></li>
                            <li><a href="*">Accessories</a></li>
                            <li><a href="*">Sale</a></li>

                        </ul>
                    </div>
                </div>

                <div class="col-lg-2  col-md-3 col-sm-6">
                    <div class="footer-widget">
                        <h6>Links</h6>
                        <ul>
                            <li><a href="*">Contact Us</a></li>
                            <li><a href="*">Payment Methods</a></li>
                            <li><a href="*">Delivary</a></li>
                            <li><a href="*">Return and Exchanges</a></li>

                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                    <div class="footer-widget">
                        <h6>NewsLetter</h6>
                        <div class="footer-newslatter">
                            <p>Be the first to know about new arrivals, look books, sales and promos!</p>
                            <form action="*">
                                <input type="text" placeholder="Your Email" />
                                <button type="submit"><span><i class="fa fa-envelope"
                                            arial-hidden="true"></i></span></button>
                            </form>
                        </div>

                    </div>
                </div>


            </div>

            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="footer-copyright-text">
                        <p>Copyright &copy; 2021 All rights reserved | This template is made with <i class="fa fa-heart-o" arial-hidden="true"></i>
                             by <a href="*">CodingWithNick</a></p>
                    </div>
                </div>
            </div>


        </div>

    </footer>
  )
}

export default Footer