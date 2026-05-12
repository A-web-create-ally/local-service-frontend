import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import service1 from "../assets/img/services-1.jpg"
import service2 from "../assets/img/services-2.jpg"
import service3 from "../assets/img/services-3.jpg"
import testBg from "../assets/img/testimonials-bg.jpg";
import t1 from "../assets/img/testimonials/testimonials-1.jpg";
import t2 from "../assets/img/testimonials/testimonials-2.jpg";
import t3 from "../assets/img/testimonials/testimonials-3.jpg";
import t4 from "../assets/img/testimonials/testimonials-4.jpg";
import t5 from "../assets/img/testimonials/testimonials-5.jpg";
import working1 from "../assets/img/working-1.jpg";
import client1 from "../assets/img/clients/client-1.png";
import client2 from "../assets/img/clients/client-2.png";
import client3 from "../assets/img/clients/client-3.png";
import client4 from "../assets/img/clients/client-4.png";
import client5 from "../assets/img/clients/client-5.png";
import client6 from "../assets/img/clients/client-6.png";
import plumbing from "../assets/img/plumbing.jpg";
import electrical from "../assets/img/electrical.jpg";
import carpenter from "../assets/img/carpenter.webp";
import home1 from "../assets/img/homecleaning.jpeg";
import spa1 from "../assets/img/spa1.jpeg";
import Featured from "./featurs.jsx";






function Service(){
    return(
        <>
        <section id="services" className="services section">

      {/* <!-- Section Title --> */}
  <div className="container section-title" data-aos="fade-up">
  <h2>Our Services</h2>
   <p>Our Top Services</p>
</div>
      {/* <!-- End Section Title --> */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
     <div className="row gy-5">
    
    <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
      <div className="service-item">
        <div className="img">
          <img src={plumbing} className="img-fluid" alt="Plumber Service"/>
        </div>
        <div className="details position-relative">
          <div className="icon">
            <i className="bi bi-wrench"></i>
          </div>
          <a href="servicesDetails" className="stretched-link">
            <h3>Plumbing Services</h3>
          </a>
          <p>24/7 emergency plumbing, leak repairs, pipe installation & bathroom fittings. Certified plumbers available in your area within 1 hour.</p>
        </div>
      </div>
    </div>
          {/* <!-- End Service Item --> */}

      <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
      <div className="service-item">
        <div className="img">
          <img src={electrical} className="img-fluid" alt="Electrician Service"/>
        </div>
        <div className="details position-relative">
          <div className="icon">
            <i className="bi bi-lightning-charge"></i>
          </div>
          <a href="ServicesDetails" className="stretched-link">
            <h3>Electrical Work</h3>
          </a>
          <p>Wiring, repairs, fan/AC installation, solar panels & safety checks. Licensed electricians with 5+ years experience.</p>
        </div>
      </div>
    </div>
          {/* <!-- End Service Item --> */}

    <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
      <div className="service-item">
        <div className="img">
          <img src={carpenter} className="img-fluid" alt="Carpenter Service"/>
        </div>
        <div className="details position-relative">
          <div className="icon">
            <i className="bi bi-hammer"></i>
          </div>
          <a href="ServicesDetails" className="stretched-link">
            <h3>Carpentry & Furniture</h3>
          </a>
          <p>Custom furniture, repairs, kitchen cabinets, wardrobes & wooden flooring. Local craftsmen with guaranteed quality work.</p>
        </div>
      </div>
    </div>
    </div>
    <div className="row gy-5 mt-3">
      <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
      <div className="service-item">
        <div className="img">
          <img src={carpenter} className="img-fluid" alt="Carpenter Service"/>
        </div>
        <div className="details position-relative">
          <div className="icon">
            <i className="bi bi-hammer"></i>
          </div>
          <a href="service-details.html" className="stretched-link">
            <h3>Carpentry & Furniture</h3>
          </a>
          <p>Custom furniture, repairs, kitchen cabinets, wardrobes & wooden flooring. Local craftsmen with guaranteed quality work.</p>
        </div>
      </div>
    </div>
    <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
      <div className="service-item">
        <div className="img">
          <img src={home1} className="img-fluid" alt="Carpenter Service"/>
        </div>
        <div className="details position-relative">
          <div className="icon">
            <i className="bi bi-hammer"></i>
          </div>
          <a href="service-details.html" className="stretched-link">
            <h3>Home Cleaning</h3>
          </a>
          <p>Custom furniture, repairs, kitchen cabinets, wardrobes & wooden flooring. Local craftsmen with guaranteed quality work.</p>
        </div>
      </div>
    </div>
    <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
      <div className="service-item">
        <div className="img">
          <img src={spa1} className="img-fluid" alt="Carpenter Service"/>
        </div>
        <div className="details position-relative">
          <div className="icon">
            <i className="bi bi-hammer"></i>
          </div>
          <a href="service-details.html" className="stretched-link">
            <h3>Spa Ayurveda</h3>
          </a>
          <p>Custom furniture, repairs, kitchen cabinets, wardrobes & wooden flooring. Local craftsmen with guaranteed quality work.</p>
        </div>
      </div>
    </div>
      
    </div>
        
    
      </div>    
    </section>
    {/* <!-- /Services Section --> */}
    {/* <!-- Clients Section --> */}
    <section id="clients" className="clients section light-background">

      <div className="container" data-aos="fade-up">

        <div className="row gy-4">

          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img src={client1} className="img-fluid" alt=""/>
          </div>
          {/* <!-- End Client Item --> */}

          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img src={client2} className="img-fluid" alt=""/>
          </div>
          {/* <!-- End Client Item --> */}

          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img src={client3} className="img-fluid" alt=""/>
          </div>
          {/* <!-- End Client Item --> */}

          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img src={client4} className="img-fluid" alt=""/>
          </div>
          {/* <!-- End Client Item --> */}

          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img src={client5} className="img-fluid" alt=""/>
          </div>
          {/* <!-- End Client Item --> */}

          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img src={client6} className="img-fluid" alt=""/>
          </div>
          {/* <!-- End Client Item --> */}

        </div>

      </div>

    </section>
    {/* <!-- /Clients Section --> */}
     <Featured />
    
    {/* <!-- Services 2 Section --> */}
    <section id="services-2" className="services-2 section light-background">

      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>CHECK OUR SERVICES</p>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container">

        <div className="row gy-4">

          <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item d-flex position-relative h-100">
              <i className="bi bi-briefcase icon flex-shrink-0"></i>
              <div>
                <h4 className="title"><a href="#" className="stretched-link">Lorem Ipsum</a></h4>
                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item d-flex position-relative h-100">
              <i className="bi bi-card-checklist icon flex-shrink-0"></i>
              <div>
                <h4 className="title"><a href="#" className="stretched-link">Dolor Sitema</a></h4>
                <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item d-flex position-relative h-100">
              <i className="bi bi-bar-chart icon flex-shrink-0"></i>
              <div>
                <h4 className="title"><a href="#" className="stretched-link">Sed ut perspiciatis</a></h4>
                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item d-flex position-relative h-100">
              <i className="bi bi-binoculars icon flex-shrink-0"></i>
              <div>
                <h4 className="title"><a href="#" className="stretched-link">Magni Dolores</a></h4>
                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div className="service-item d-flex position-relative h-100">
              <i className="bi bi-brightness-high icon flex-shrink-0"></i>
              <div>
                <h4 className="title"><a href="#" className="stretched-link">Nemo Enim</a></h4>
                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div className="col-md-6" data-aos="fade-up" data-aos-delay="600">
            <div className="service-item d-flex position-relative h-100">
              <i className="bi bi-calendar4-week icon flex-shrink-0"></i>
              <div>
                <h4 className="title"><a href="#" className="stretched-link">Eiusmod Tempor</a></h4>
                <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

        </div>

      </div>

    </section>
   
    {/* <!-- /Services 2 Section --> */}

    {/* <!-- Testimonials Section --> */}
    <section id="testimonials" className="testimonials section dark-background">

  <img src={testBg} className="testimonials-bg" alt="" />

  <div className="container" data-aos="fade-up" data-aos-delay="100">

    <Swiper
      modules={[Autoplay, Pagination]}
      loop={true}
      speed={600}
      autoplay={{ delay: 5000 }}
      slidesPerView="auto"
      pagination={{ clickable: true }}
    >

      <SwiperSlide>
        <div className="testimonial-item">
          <img src={t1} className="testimonial-img" alt="" />
          <h3>Saul Goodman</h3>
          <h4>CEO &amp; Founder</h4>
          <div className="stars">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </div>
          <p>
            <i className="bi bi-quote quote-icon-left"></i>
            <span>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
            </span>
            <i className="bi bi-quote quote-icon-right"></i>
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="testimonial-item">
          <img src={t2} className="testimonial-img" alt="" />
          <h3>Sara Wilsson</h3>
          <h4>Designer</h4>
          <div className="stars">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </div>
          <p>
            <i className="bi bi-quote quote-icon-left"></i>
            <span>
              Export tempor illum tamen malis malis eram quae irure esse labore.
            </span>
            <i className="bi bi-quote quote-icon-right"></i>
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="testimonial-item">
          <img src={t3} className="testimonial-img" alt="" />
          <h3>Jena Karlis</h3>
          <h4>Store Owner</h4>
          <div className="stars">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </div>
          <p>
            <i className="bi bi-quote quote-icon-left"></i>
            <span>
              Enim nisi quem export duis labore cillum quae magna enim sint.
            </span>
            <i className="bi bi-quote quote-icon-right"></i>
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="testimonial-item">
          <img src={t4} className="testimonial-img" alt="" />
          <h3>Matt Brandon</h3>
          <h4>Freelancer</h4>
          <div className="stars">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </div>
          <p>
            <i className="bi bi-quote quote-icon-left"></i>
            <span>
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa.
            </span>
            <i className="bi bi-quote quote-icon-right"></i>
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="testimonial-item">
          <img src={t5} className="testimonial-img" alt="" />
          <h3>John Larson</h3>
          <h4>Entrepreneur</h4>
          <div className="stars">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </div>
          <p>
            <i className="bi bi-quote quote-icon-left"></i>
            <span>
              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua.
            </span>
            <i className="bi bi-quote quote-icon-right"></i>
          </p>
        </div>
      </SwiperSlide>

    </Swiper>

  </div>

</section>

    {/* <!-- /Testimonials Section --> */}

        </>
    )
}
export default Service