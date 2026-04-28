
import heroBg from "../assets/img/hero-bg.jpg";
import spa from "../assets/img/spa.jpg";


function Hero(){

 return(
    <>
     <section id="hero" className="hero">
              <img src={spa} alt="" />
    
            <div className="container text-center">
              <h2>Welcome to Our Website</h2>
              <p>We are team of talented designers making websites with Bootstrap</p>
    
              <div className="d-flex justify-content-center">
                <a href="#about" className="btn-get-started">Get Started</a>
                <a href="#" className="btn-watch-video d-flex align-items-center">
                  <i className="bi bi-play-circle"></i>
                  <span>Watch Video</span>
                </a> 
              </div>
            </div>
         </section>
    </>
 )



}

export default Hero;