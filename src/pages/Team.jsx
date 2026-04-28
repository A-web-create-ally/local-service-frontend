import team1 from '../assets/img/team/team-1.jpg';
import team2 from '../assets/img/team/team-2.jpg';
import team3 from '../assets/img/team/team-3.jpg';

function Team() {
  return (
    <section id="team" className="team section light-background">

      
      <div class="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>CHECK OUR TEAM</p>
      </div>

      <div className="container">

        <div className="row gy-5">

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="member">
              <div className="pic"><img src={team1} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <div className="social">
                  <a href=""><i className="bi bi-twitter-x"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="member">
              <div className="pic"><img src={team2} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <div className="social">
                  <a href=""><i className="bi bi-twitter-x"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="member">
              <div className="pic"><img src={team3} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
                <div className="social">
                  <a href=""><i className="bi bi-twitter-x"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>

    </section>

  );
}

export default Team;
