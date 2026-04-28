import { useState } from "react";
import w1 from "../assets/img/working-1.jpg";
import w2 from "../assets/img/working-2.jpg";
import w3 from "../assets/img/working-3.jpg";
import w4 from "../assets/img/working-4.jpg";


function Featured() {
  const [activeTab, setActiveTab] = useState("tab-1")
  console.log(activeTab)
  return (
    <section id="features" className="features section">
      <div className="container">
        
        {/* TABS */}
        <ul className="nav nav-tabs row d-flex" data-aos="fade-up" data-aos-delay="100">

          {["tab-1","tab-2","tab-3","tab-4"].map((tab, i) => (
            <li className="nav-item col-3" key={tab}>
              <button
                type="button"
                className={`nav-link ${activeTab === tab ? "active show" : ""}`}
                onClick={() => setActiveTab(tab)}
                
                style={{ cursor: "pointer" }}
              >
                <i className={`bi ${
                  i === 0 ? "bi-binoculars" :
                  i === 1 ? "bi-box-seam" :
                  i === 2 ? "bi-brightness-high" :
                  "bi-command"
                }`}></i>

                <h4 className="d-none d-lg-block">
                  {[
                    "Modi sit est dela pireda nest",
                    "Unde praesenti mara setra le",
                    "Pariatur explica nitro dela",
                    "Nostrum qui dile node"
                  ][i]}
                </h4>
              </button>
            </li>
          ))}

        </ul>

        {/* CONTENT */}
        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">

          {/* TAB 1 */}
          <div className={`tab-pane fade ${activeTab === "tab-1" ? "active show" : ""}`}>
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="bi bi-check2-all"></i>
                    <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                  </li>
                  <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit</span>.</li>
                  <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
                <p className="fst-italic">Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src={w1} alt="" className="img-fluid" />
              </div>
            </div>
          </div>

          {/* TAB 2 */}
          <div className={`tab-pane fade ${activeTab === "tab-2" ? "active show" : ""}`}>
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Neque exercitationem debitis soluta quos</h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src={w2} alt="" className="img-fluid" />
              </div>
            </div>
          </div>

          {/* TAB 3 */}
          <div className={`tab-pane fade ${activeTab === "tab-3" ? "active show" : ""}`}>
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Voluptatibus commodi ut accusamus</h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
                <ul>
                  <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</span></li>
                </ul>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src={w3} alt="" className="img-fluid" />
              </div>
            </div>
          </div>

          {/* TAB 4 */}
          <div className={`tab-pane fade ${activeTab === "tab-4" ? "active show" : ""}`}>
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Omnis fugiat ea explicabo sunt</h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src={w4} alt="" className="img-fluid" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Featured