import React from "react";
import "./Footer.css";
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
  return (
    <div>
      <footer class="section bg-footer">
        <div class="container">
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-6 fCol">
                <h6 class="footer-heading text-uppercase text-white">
                  About
                </h6>
                <ul class="list-unstyled footer-link mt-4">
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Press</a>
                  </li>
                  <li>
                    <a href="">Our Page</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-2 col-md-4 col-sm-6 fCol">
                <h6 class="footer-heading text-uppercase text-white">
                  Social
                </h6>
                <ul class="list-unstyled footer-link mt-4">
                  <li>
                    <a href="">Facebook</a>
                  </li>
                  <li>
                    <a href="">Twitter</a>
                  </li>
                  <li>
                    <a href="">Instagram</a>
                  </li>
                  <li>
                    <a href="">YouTube</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-2 col-md-4 col-sm-6 fCol">
                <h6 class="footer-heading text-uppercase text-white">
                  Policy
                </h6>
                <ul class="list-unstyled footer-link mt-4">
                  <li>
                    <a href="">Return Policy</a>
                  </li>
                  <li>
                    <a href="">Terms Of Use</a>
                  </li>
                  <li>
                    <a href="">Security</a>
                  </li>
                  <li>
                    <a href="">Privacy</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-2 col-md-4 col-sm-6 fCol">
                <h6 class="footer-heading text-uppercase text-white">
                  Help
                </h6>
                <ul class="list-unstyled footer-link mt-4">
                  <li>
                    <a href="">Payment</a>
                  </li>
                  <li>
                    <a href="">Shipping</a>
                  </li>
                  <li>
                    <a href="">Cancellation & Return</a>
                  </li>
                  <li>
                    <a href="">FAQ</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-2 col-md-4 col-sm-6 fCol">
                <h6 class="footer-heading text-uppercase text-white">
                    Contact 
                </h6>
                <p class="contact-info mt-4">
                  Contact us if need help withanything
                </p>
                <p class="contact-info">+01 123-456-7890</p>
              </div>

              <div class="col-lg-2 col-md-4 col-sm-6 fCol">
                <h6 class="footer-heading text-uppercase text-white">
                  Address
                </h6>
                <p class="contact-info mt-4">
                myShoppy Private Limited,
                Buildings Alyssa,
                Outer Ring Road,
                Bengaluru, 560103,
                Karnataka, India
                </p>
              </div>
            </div>
            
        </div>

        <div class="text-center mt-5">
          <p class="footer-alt mb-0 f-14">
            Copyright <CopyrightIcon className="copyright"/> 2023, Abhishek Pandit, All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
