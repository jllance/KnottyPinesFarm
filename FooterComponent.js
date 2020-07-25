import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-4 col-sm-2 offset-1">
            <h5>Links</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="OurFarm.html">About</a>
              </li>
              <li>
                <a href="Sales.html">Sales</a>
              </li>
              <li>
                <a href="Animals.html">Animals</a>
              </li>
              <li>
                <a href="contactFarm.html">Contact</a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-sm-5 text-center">
            <h5>Social</h5>
            <a
              class="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
            >
              <i class="fa fa-instagram"></i>
            </a>
            <a
              class="btn btn-social-icon btn-facebook"
              href="http://facebook.com/"
            >
              <i class="fa fa-facebook"></i>
            </a>
            <a
              class="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
            >
              <i class="fa fa-twitter"></i>
            </a>
            <a
              class="btn btn-social-icon btn-google"
              href="http://youtube.com/"
            >
              <i class="fa fa-youtube"></i>
            </a>
          </div>
          <div class="col-sm-4 text-center">
            <a role="button" class="btn btn-link" href="tel:+12065551234">
              <i class="fa fa-phone"></i> 1-206-555-1234
            </a>
            <br />
            <a
              role="button"
              class="btn btn-link"
              href="mailto:info@KnottyPinesFarm.co"
            >
              <i class="fa fa-envelope-o"></i> info@knottypines.com
            </a>
          </div>
          <div>
            <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
            <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
            <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
