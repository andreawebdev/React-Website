import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="site-footer pt-5 ">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6 className="text-center">Lorem ipsum</h6>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque in ex fringilla, facilisis mauris eget, condimentum
                arcu. Donec sollicitudin ipsum finibus imperdiet pharetra. Nulla
                sit amet mi a diam varius mollis et ut tortor. Nulla magna
                lectus, laoreet facilisis dolor et, lobortis consequat nisi.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Aenean maximus at nulla quis
                faucibus.
              </p>
            </div>

            <div className="col-xs-6 col-md-3 text-center">
              <h6>Contact us</h6>
              <ul className="footer-links">
                <li>
                  <a href="/">Contact</a>
                </li>
                <li>
                  <a href="/">Destinations</a>
                </li>
                <li>
                  <a href="/">Support</a>
                </li>
                <li>
                  <a href="/">Sponsorship</a>
                </li>
                <li>
                  <a href="/">Investors</a>
                </li>
                <li>
                  <a href="/">Carrers</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3 text-center">
              <h6>Videos</h6>
              <ul className="footer-links">
                <li>
                  <a href="/">Submit video</a>
                </li>
                <li>
                  <a href="/">Ambassadors</a>
                </li>
                <li>
                  <a href="/">Agency</a>
                </li>
                <li>
                  <a href="/">Influencers</a>
                </li>
                <li>
                  <a href="/">Privacy policy</a>
                </li>
              </ul>
            </div>
          </div>
          <hr></hr>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2021 All Rights Reserved
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <Link
                    class="social-icon-link instagram"
                    to=""
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <i class="fab fa-instagram" />
                  </Link>
                </li>
                <li>
                  <Link
                    class="social-icon-link youtube"
                    to=""
                    target="_blank"
                    aria-label="Youtube"
                  >
                    <i class="fab fa-youtube" />
                  </Link>
                </li>
                <li>
                  <Link
                    class="social-icon-link twitter"
                    to=""
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <i class="fab fa-linkedin" />
                  </Link>
                </li>
                <li>
                  <Link
                    class="social-icon-link facebook"
                    to=""
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <i class="fab fa-facebook-f" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
