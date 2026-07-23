import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "../assets/styles/profile.css";
import { getProfile, updateProfile, deleteMyAccount, changePassword, logout} from "../features/auth/authslic";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { toast } from "react-toastify";

function Profile() {

  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

useEffect(() => {

  dispatch(getProfile());

}, [dispatch]);

const [showEditModal, setShowEditModal] = useState(false);
const [editData, setEditData] = useState({
  name: "",
  phone: "",
  country: "",
  state: "",
  city: "",
  street: "",
  pincode: "",
});
const [showDeleteModal, setShowDeleteModal] = useState(false);

//chnage password
const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
});
const [showOldPassword, setShowOldPassword] = useState(false);
const [showNewPassword, setShowNewPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);

const handleLogout = () => {

  localStorage.removeItem("token");
  localStorage.removeItem("user");

  dispatch(logout());

  navigate("/");

};

const handleUpdateProfile = async () => {

  const result = await dispatch(
    updateProfile(editData)
  );

  if (result.meta.requestStatus === "fulfilled") {

    dispatch(getProfile());
    setShowEditModal(false);
    toast.success("Profile updated successfully");

  } else {
    toast.error(result.payload);
  }
};

const handleDeleteAccount = async () => {

    const result = await dispatch(deleteMyAccount());
    if (result.meta.requestStatus === "fulfilled") {

        toast.success("Account deleted successfully");

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        dispatch(logout());
        navigate("/Home");

    } else {
        toast.error(result.payload);
    }
};

const handleChangePassword = async () => {

  if (
    !passwordData.oldPassword ||
    !passwordData.newPassword ||
    !passwordData.confirmPassword
  ) {
    toast.error("All fields are required");
    return;
  }

  if (
    passwordData.newPassword !==
    passwordData.confirmPassword
  ) {
    toast.error("Passwords do not match");
    return;
  }

  const result = await dispatch(
    changePassword(passwordData)
  );

  if (result.meta.requestStatus === "fulfilled") {

    toast.success("Password changed successfully");
    setPasswordData({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setShowChangePasswordModal(false);

  } else {
    toast.error(result.payload);
  }
};

  return (
  <>
    <Header />

    <div className="profile-page">

      <div className="container">

        <div className="row justify-content-center">

          <div className="col-lg-8 col-xl-7">

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
                  {user?.role?.toUpperCase() || "USER"}
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
                      <p>
                        {user?.address?.street},<br />
                        {user?.address?.city}, {user?.address?.state}<br />
                        {user?.address?.country} - {user?.address?.pincode}
                      </p>          
                     

                    </div>

                  </div>

                </div>
          <div className="row mt-5">

              <div className="col-lg-8"> 

                <div className="account-section">

                  <h4 className="account-title">
                    Account Information
                  </h4>

                  <div className="account-table">

                    <div className="account-row">
                      <span>Full Name</span>
                      <strong>{user?.name}</strong>
                    </div>

                    <div className="account-row">
                      <span>Role</span>
                      <strong>
                        {user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1)}
                      </strong>
                    </div>

                    <div className="account-row">
                      <span>Country</span>
                      <strong>{user?.address?.country}</strong>
                    </div>

                    <div className="account-row">
                      <span>State</span>
                      <strong>{user?.address?.state}</strong>
                    </div>

                    <div className="account-row">
                      <span>City</span>
                      <strong>{user?.address?.city}</strong>
                    </div>

                    <div className="account-row">
                      <span>Street</span>
                      <strong>{user?.address?.street}</strong>
                    </div>

                    <div className="account-row">
                      <span>Pincode</span>
                      <strong>{user?.address?.pincode}</strong>
                    </div>

                  </div>
                </div>               
              </div>
            

            <div className="col-lg-4">

                <div className="action-card">

                    <h4 className="account-title">
                        Quick Actions
                    </h4>

                <button
                    className="btn btn-primary w-100 mb-3"
                    onClick={() => {
                        setEditData({
                            name: user?.name || "",
                            phone: user?.phone || "",
                            country: user?.address?.country || "",
                            state: user?.address?.state || "",
                            city: user?.address?.city || "",
                            street: user?.address?.street || "",
                            pincode: user?.address?.pincode || "",
                        });
                        setShowEditModal(true);
                    }}
                >
                    Edit Profile
                </button>

                <button
                    className="btn btn-success w-100 mb-3"
                    onClick={() => navigate("/booking")}
                >
                    My Bookings
                </button>

                <button
                    className="btn btn-warning w-100 mb-3"
                    onClick={() => setShowChangePasswordModal(true)}
                >
                    Change Password
                </button>

                    <button
                        className="btn btn-danger w-100 mb-3"
                        onClick={() => setShowDeleteModal(true)}
                    >
                        Delete Account
                    </button>

                    <button
                        className="btn btn-outline-danger w-100"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </div>

            </div>     
            </div>           
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

{showEditModal && (
  <div className="signup-modal-overlay modal fade show d-block">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content rounded-4">

        <div className="modal-header">
        <h4 className="modal-title fw-bold d-flex align-items-center">

        <i className="bi bi-pencil-square me-2"></i>

        Edit Profile

        </h4>

          <button
            type="button"
            className="btn-close"
            onClick={() => setShowEditModal(false)}
          ></button>
        </div>

        <div className="modal-body">

          <div className="row">

            {/* Name */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                value={editData.name}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    name: e.target.value,
                  })
                }
              />
            </div>

            {/* Phone */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                maxLength={10}
                value={editData.phone}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    phone: e.target.value,
                  })
                }
              />
            </div>

            {/* Country */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Country</label>
              <select
              className="form-control"
              value={editData.country}
              onChange={(e)=>
              setEditData({
              ...editData,
              country:e.target.value
              })
              }
              >
              <option value="India">
              India
              </option>
              </select>
            </div>

            {/* State */}
            <div className="col-md-6 mb-3">
              <label className="form-label">State</label>
              <input
                type="text"
                className="form-control"
                value={editData.state}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    state: e.target.value,
                  })
                }
              />
            </div>

            {/* City */}
            <div className="col-md-6 mb-3">
              <label className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                value={editData.city}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    city: e.target.value,
                  })
                }
              />
            </div>

            {/* Pincode */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Pincode</label>
              <input
                type="text"
                className="form-control"
                maxLength={6}
                value={editData.pincode}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    pincode: e.target.value,
                  })
                }
              />
            </div>

            {/* Street */}
            <div className="col-12 mb-3">
              <label className="form-label">Street Address</label>
              <textarea
                rows="3"
                className="form-control"
                value={editData.street}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    street: e.target.value,
                  })
                }
              ></textarea>
            </div>

          </div>

        </div>

        <div className="modal-footer d-flex justify-content-center gap-3">

          <button
            className="btn btn-outline-secondary"
            onClick={() => setShowEditModal(false)}
          >
            Cancel
          </button>

          <button
              className="btn btn-primary"
              onClick={handleUpdateProfile}
          >
              Save Changes
          </button>

        </div>

      </div>
    </div>
  </div>
)}    

{showChangePasswordModal && (
<div className="signup-modal-overlay modal fade show d-block">

<div className="modal-dialog modal-dialog-centered">

<div className="modal-content rounded-4">

<div className="modal-header">

<h4 className="fw-bold">

<i className="bi bi-lock-fill me-2"></i>

Change Password

</h4>

<button
className="btn-close"
onClick={() => setShowChangePasswordModal(false)}
></button>

</div>

<div className="modal-body">

<div className="mb-3">

<label className="form-label">
Old Password
</label>

<div className="input-group">

<input
type={showOldPassword ? "text" : "password"}
className="form-control"
value={passwordData.oldPassword}
onChange={(e)=>
setPasswordData({
...passwordData,
oldPassword:e.target.value
})
}
/>

<button
className="btn btn-outline-secondary"
type="button"
onClick={()=>
setShowOldPassword(!showOldPassword)
}
>

<i className={`bi ${
showOldPassword
? "bi-eye-slash-fill"
: "bi-eye-fill"
}`}></i>

</button>

</div>

</div>

<div className="mb-3">

<label className="form-label">

New Password

</label>

<div className="input-group">

<input
type={showNewPassword ? "text" : "password"}
className="form-control"
value={passwordData.newPassword}
onChange={(e)=>
setPasswordData({
...passwordData,
newPassword:e.target.value
})
}
/>

<button
className="btn btn-outline-secondary"
type="button"
onClick={()=>
setShowNewPassword(!showNewPassword)
}
>

<i className={`bi ${
showNewPassword
? "bi-eye-slash-fill"
: "bi-eye-fill"
}`}></i>

</button>

</div>

</div>

<div className="mb-3">

<label className="form-label">

Confirm Password

</label>

<div className="input-group">

<input
type={showConfirmPassword ? "text" : "password"}
className="form-control"
value={passwordData.confirmPassword}
onChange={(e)=>
setPasswordData({
...passwordData,
confirmPassword:e.target.value
})
}
/>

<button
className="btn btn-outline-secondary"
type="button"
onClick={()=>
setShowConfirmPassword(!showConfirmPassword)
}
>

<i className={`bi ${
showConfirmPassword
? "bi-eye-slash-fill"
: "bi-eye-fill"
}`}></i>

</button>

</div>

</div>

</div>

<div className="modal-footer">

<button
className="btn btn-secondary"
onClick={() => {

setPasswordData({
oldPassword:"",
newPassword:"",
confirmPassword:"",
});

setShowChangePasswordModal(false);

}}
>

Cancel

</button>

<button
className="btn btn-warning"
onClick={handleChangePassword}
>

Change Password

</button>

</div>

</div>

</div>

</div>
)}

{showDeleteModal && (
  <div className="signup-modal-overlay modal fade show d-block">

    <div className="modal-dialog modal-dialog-centered">

      <div className="modal-content rounded-4">

        <div className="modal-header">

          <h4 className="modal-title text-danger fw-bold">

            <i className="bi bi-exclamation-triangle-fill me-2"></i>

            Delete Account

          </h4>

          <button
            className="btn-close"
            onClick={() => setShowDeleteModal(false)}
          ></button>

        </div>

        <div className="modal-body text-center">

          <p className="fs-5">

            Are you sure you want to delete your account?

          </p>

          <p className="text-muted mb-4">

            This action cannot be undone.

          </p>

          <div className="text-start">

            <p>
              • Your profile will be deactivated.
            </p>

            <p>
              • You will be logged out immediately.
            </p>

            <p className="mb-0">
              • Contact admin if you want to restore your account.
            </p>

          </div>

        </div>

        <div className="modal-footer">

          <button
            className="btn btn-secondary"
            onClick={() => setShowDeleteModal(false)}
          >
            Cancel
          </button>

          <button
            className="btn btn-danger"
            onClick={() => {

              setShowDeleteModal(false);

              handleDeleteAccount();

            }}
          >
            Delete Account
          </button>

        </div>

      </div>

    </div>

  </div>
)}

   <Footer />
  </>
  );

}

export default Profile;