import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMyBookings } from "../features/bookingSlice";

const BookingPage = () => {

  const dispatch = useDispatch();

  const {
    bookings,
    loading,
  } = useSelector((state) => state.booking);

  useEffect(() => {

    dispatch(getMyBookings());

  }, [dispatch]);

  return (

    <div className="container py-5">

      {/* HEADER */}
      <div className="mb-5">

        <button className="btn btn-warning rounded-pill px-4 py-2 fw-semibold mb-3">
          📅 My Bookings
        </button>

        <h1 className="fw-bold display-4 mb-2">
          Manage Your Bookings
        </h1>

        <p className="text-secondary fs-5">
          Track all your booked services easily
        </p>

      </div>

      {/* LOADING */}
      {loading ? (

        <div className="bg-white shadow-sm rounded-4 p-5 text-center">

          <h3>
            Loading...
          </h3>

        </div>

      ) : bookings.length === 0 ? (

        <div className="bg-white shadow-sm rounded-4 p-5 text-center">

          <h3 className="fw-bold mb-2">
            No Bookings Found
          </h3>

          <p className="text-secondary">
            Book a service to see it here.
          </p>

        </div>

      ) : (

        <div className="row g-4">

          {bookings.map((item) => (

            <div
              className="col-lg-6"
              key={item._id}
            >

              <div className="card border-0 shadow-lg rounded-4 h-100">

                {/* CARD BODY */}
                <div className="card-body p-4">

                  {/* TOP */}
                  <div className="d-flex justify-content-between align-items-center mb-4">

                    <div className="d-flex align-items-center gap-3">

                      <div
                        className="bg-warning rounded-4 d-flex align-items-center justify-content-center"
                        style={{
                          width: "60px",
                          height: "60px",
                          fontSize: "28px",
                        }}
                      >
                        🔧
                      </div>

                      <div>

                        <h4 className="fw-bold mb-1">
                          {item.serviceTitle}
                        </h4>

                        <p className="text-secondary mb-0">
                          {item.fullName}
                        </p>

                      </div>

                    </div>

                    <h3 className="fw-bold text-warning mb-0">
                      ₹{item.servicePrice}
                    </h3>

                  </div>

                  {/* INFO */}
                  <div className="row g-3 mb-4">

                    <div className="col-md-6">

                      <div className="bg-light rounded-4 p-3 h-100">

                        <small className="text-secondary d-block mb-1">
                          Date
                        </small>

                        <strong>
                          {item.bookingDate}
                        </strong>

                      </div>

                    </div>

                    <div className="col-md-6">

                      <div className="bg-light rounded-4 p-3 h-100">

                        <small className="text-secondary d-block mb-1">
                          Phone
                        </small>

                        <strong>
                          {item.phone}
                        </strong>

                      </div>

                    </div>

                  </div>

                  {/* ADDRESS */}
                  <div className="bg-warning bg-opacity-10 border rounded-4 p-3 mb-4">

                    <small className="text-warning fw-bold d-block mb-1">
                      Address
                    </small>

                    <p className="mb-0 text-dark">
                      {item.address}
                    </p>

                  </div>

                  {/* BUTTONS */}
                  <div className="d-flex gap-3">

                    <button className="btn btn-warning text-white fw-bold w-100 py-3 rounded-4">
                      Track Booking
                    </button>

                    <button className="btn btn-dark fw-bold w-100 py-3 rounded-4">
                      Cancel
                    </button>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default BookingPage;