import { useSelector } from "react-redux";
import "../assets/styles/profile.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authslic";

function Profile() {

  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

const handleLogout = () => {

  localStorage.removeItem("token");
  localStorage.removeItem("user");

  dispatch(logout());

  navigate("/");

};
 
  return (

    <div className="profile-page">

      <div className="container">

        <div className="row justify-content-center">

          <div className="col-lg-10">

            <div className="profile-card">

              {/* Cover */}
              <div className="profile-cover">

                <div className="profile-image">

                  <i className="bi bi-person-fill"></i>

                </div>

              </div>

              {/* Content */}
              <div className="profile-content">

                <h2>
                  {user?.name || "JustBook User"}
                </h2>

                <p className="profile-role">
                  Premium Customer
                </p>

                {/* Info Cards */}
                <div className="row mt-5 g-4">

                  <div className="col-md-4">

                    <div className="info-box">

                      <i className="bi bi-envelope-fill"></i>

                      <h6>Email</h6>

                      <p>
                        {user?.email || "Not Available"}
                      </p>

                    </div>

                  </div>

                  <div className="col-md-4">

                    <div className="info-box">

                      <i className="bi bi-telephone-fill"></i>

                      <h6>Phone</h6>

                      <p>
                        {user?.phone || "Not Available"}
                      </p>

                    </div>

                  </div>

                  <div className="col-md-4">

                    <div className="info-box">

                      <i className="bi bi-geo-alt-fill"></i>

                      <h6>Address</h6>

                     

                    </div>

                  </div>

                </div>
               
               
                <div className="profile-buttons">
                 <button className="booking-btn">
                    My Bookings
                  </button>

                  <button className="logout-btn" onClick={handleLogout}>
                    Logout
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Profile;