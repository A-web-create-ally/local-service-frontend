import about from "../assets/img/about.jpg";
import about2 from "../assets/img/about-2.jpg";
import ac3 from "../assets/img/ac3.jpg";
import house from "../assets/img/house.jpeg"


function About(){
    return(
        <>
        <section id="about" className="about section">

      <div className="container">

        <div className="row gy-4">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
           <h3>We Help You Find Trusted Local Service Professionals Easily</h3>
            <img src={ac3} className="img-fluid rounded-4 mb-4" alt=""/>
           <p>
  Our platform connects you with reliable and verified local service providers 
  for all your daily needs. Whether you need a plumber, electrician, cleaner, 
  or any other home service, we make it simple and fast to book.
</p>

<p>
  We focus on quality, trust, and convenience. Every service provider is 
  carefully selected so you get the best experience without any hassle. 
  Save your time and get your work done by professionals near you.
</p>
</div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
            <div className="content ps-0 ps-lg-5">
            <p className="fst-italic">
  Book services anytime, anywhere with just a few clicks.
</p>

<ul>
  <li>
    <i className="bi bi-check-circle-fill"></i> 
    <span>Verified and trusted professionals</span>
  </li>
  <li>
    <i className="bi bi-check-circle-fill"></i> 
    <span>Quick booking and fast service</span>
  </li>
  <li>
    <i className="bi bi-check-circle-fill"></i> 
    <span>Affordable pricing with quality work</span>
  </li>
</ul>

<p>
  From small fixes to major home services, we ensure you get the right expert 
  at the right time. Our goal is to make local services easily accessible 
  for everyone.
</p>

              <div className="position-relative mt-4">
                <img src={house} className="img-fluid rounded-4" alt=""/>
                <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn"></a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>

    <section id="stats" className="stats section light-background">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">

          <div className="col-lg-3 col-md-6">
            <div className="stats-item d-flex align-items-center w-100 h-100">
              <i className="bi bi-emoji-smile color-blue flex-shrink-0"></i>
              <div>
                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter">232</span>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          {/* <!-- End Stats Item --> */}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item d-flex align-items-center w-100 h-100">
              <i className="bi bi-journal-richtext color-orange flex-shrink-0"></i>
              <div>
                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter">521</span>
                <p>Projects</p>
              </div>
            </div>
          </div>
          {/* <!-- End Stats Item --> */}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item d-flex align-items-center w-100 h-100">
              <i className="bi bi-headset color-green flex-shrink-0"></i>
              <div>
                <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter">1463</span>
                <p>Hours Of Support</p>
              </div>
            </div>
          </div>
          {/* <!-- End Stats Item --> */}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item d-flex align-items-center w-100 h-100">
              <i className="bi bi-people color-pink flex-shrink-0"></i>
              <div>
                <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter">15</span>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
          {/* <!-- End Stats Item --> */}

        </div>

      </div>

    </section>
    {/* <!-- /Stats Section --> */}
        </>
    )
}
export default About