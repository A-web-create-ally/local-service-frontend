import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function Footer(){
    return(
        <>        
        <footer id="footer" className="footer dark-background">

    <div className="container footer-top">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6 footer-about">
          <a href="index.html" className="logo d-flex align-items-center">
            <span className="sitename">JustBook</span>
          </a>
          <div className="footer-contact pt-3">
            <p>A108 Adam Street</p>
            <p>Vastral, NY 535022</p>
            <p className="mt-3"><strong>Phone:</strong> <span>+91 9725648135</span></p>
            <p><strong>Email:</strong> <span>info@example.com</span></p>
          </div>
          <div className="social-links d-flex mt-4">
            <a href=""><i className="bi bi-twitter-x"></i></a>
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-instagram"></i></a>
            <a href=""><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">About us</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Services</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">My Bookings</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Spa Ayurveda</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Home Cleaning</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Plumbing </a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Electrical</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">carpentry</a></li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-12 footer-newsletter">
          <h4>Our Newsletter</h4>
          <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
          <form action="forms/newsletter.php" method="post" className="php-email-form">
            <div className="newsletter-form"><input type="email" name="email"/><input type="submit" value="Subscribe"/></div>
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your subscription request has been sent. Thank you!</div>
          </form>
        </div>

      </div>
    </div>

    <div className="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong className="px-1 sitename">Just Book</strong> <span>All Rights Reserved</span></p>
      <div className="credits">
        {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you've purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] --> 
        <!--Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by <a href="https://themewagon.com"/>ThemeWagon -->
        */
        }
      
      </div>
    </div>
  </footer>
  </>
    )
}
export default Footer
