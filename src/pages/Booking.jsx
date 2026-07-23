import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/booking.css";
import { getMyBookings,cancelBooking,rescheduleBooking } from "../features/bookingSlice.js";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

const BookingPage = () => {

  const dispatch = useDispatch();

  const {
    bookings,
    loading,
  } = useSelector((state) => state.booking);

const [showReschedule, setShowReschedule] = useState(false);

const [selectedBookingId, setSelectedBookingId] = useState("");

const [rescheduleData, setRescheduleData] = useState({
  bookingDate: "",
  bookingTime: "",
  address: "",
});

const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {

    dispatch(getMyBookings());

  }, [dispatch]);

  const filteredBookings = bookings.filter((booking) => {
    if (activeFilter === "All") return true;

    return (
      booking.bookingStatus.toLowerCase() === 
      activeFilter.toLowerCase()
    );
  });

  const pendingCount = bookings.filter(
    (b) => b.bookingStatus === "Pending"
  ).length;

  const completedCount = bookings.filter(
    (b) => b.bookingStatus === "Completed"
  ).length;

  const cancelledCount = bookings.filter(
    (b) => b.bookingStatus === "Cancelled"
  ).length;
  
  const handleCancelBooking = (bookingId) => {
      const confirmCancel = window.confirm(
          "Are you sure you want to cancel this booking?"
      );

      if(!confirmCancel){
          return;
      }
      dispatch(cancelBooking(bookingId));
  };  

  const handleOpenReschedule = (booking) => {
    setSelectedBookingId(booking._id);
    setRescheduleData({
        bookingDate: booking.bookingDate,
        bookingTime: booking.bookingTime,
        address: booking.address,
    });
    setShowReschedule(true);
  };

const handleReschedule = async () => {

    if (
        !rescheduleData.bookingDate ||
        !rescheduleData.bookingTime ||
        !rescheduleData.address.trim()
    ) {
        toast.error("Please fill all fields");
        return;
    }

    const result = await dispatch(
        rescheduleBooking({
            bookingId: selectedBookingId,
            bookingData: rescheduleData,
        })
    );

    if (rescheduleBooking.fulfilled.match(result)) {
        toast.success("Booking rescheduled successfully!");
        setShowReschedule(false);
    } else {
        toast.error(result.payload || "Failed to reschedule booking");
    }
};

  return (
  <>
  <Header />
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

      <div className="booking-loading">
          <h3>Loading...</h3>
      </div>

      ) : bookings.length === 0 ? (

      <div className="no-booking">
          <h3>No Bookings Found</h3>
          <p>Book a service to see it here.</p>
      </div>

      ) : (

      <>

      <div className="booking-filters mb-4">

        <button
          className={activeFilter === "All" ? "active" : ""}
          onClick={() => setActiveFilter("All")}
        >
          All ({bookings.length})
        </button>

        <button
          className={activeFilter === "Pending" ? "active" : ""}
          onClick={() => setActiveFilter("Pending")}
        >
          Pending ({pendingCount})
        </button>

        <button
          className={activeFilter === "Completed" ? "active" : ""}
          onClick={() => setActiveFilter("Completed")}
        >
          Completed ({completedCount})
        </button>

        <button
          className={activeFilter === "Cancelled" ? "active" : ""}
          onClick={() => setActiveFilter("Cancelled")}
        >
          Cancelled ({cancelledCount})
        </button>

      </div>
      {/* <div className="booking-filters mb-4">

          <button className="booking-filter active">
              All ({bookings.length})
          </button>

          <button className="booking-filter">
              Pending
          </button>

          <button className="booking-filter">
              Completed
          </button>

          <button className="booking-filter">
              Cancelled
          </button>

      </div> */}

      <div className="booking-table-wrapper">

      <table className="booking-table">

      <thead>

      <tr>

      <th>Service</th>

      <th>Provider</th>

      <th>Duration</th>

      <th>Rating</th>

      <th>Price</th>

      <th>Booked On</th>

      <th>Service Date & Time</th>

      <th>Phone</th>

      <th>Status</th>

      <th>Actions</th>

      </tr>

      </thead>

      <tbody>

      {filteredBookings.map((item) => (

      <tr key={item._id}>

          <td>
              <strong>{item.service?.title}</strong>
          </td>

          <td className="provider-name">
              {item.service?.providerName}
          </td>

          <td>
              {item.service?.duration}
          </td>

          <td className="provider-name">
              ⭐ {item.service?.rating}
          </td>

          <td>
              ₹{item.service?.price}
          </td>

          <td className="provider-name">
              <strong>
                  {new Date(item.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                  })}
              </strong>

              <br />

              <small>
                  {new Date(item.createdAt).toLocaleTimeString("en-IN", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                  })}
              </small>
          </td>

          <td>

              <strong>
                  {new Date(item.bookingDate).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                  })}
              </strong>

              <br />

              <small>
                  {new Date(`1970-01-01T${item.bookingTime}`).toLocaleTimeString(
                      "en-IN",
                      {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                      }
                  )}
              </small>

          </td>

          <td>
              {item.mobileNumber}
          </td>

          <td>

              <span
                  className={`booking-status ${
                      item.bookingStatus === "Pending"
                          ? "pending"
                          : item.bookingStatus === "Completed"
                          ? "completed"
                          : "cancelled"
                  }`}
              >
                  {item.bookingStatus}
              </span>

          </td>

          <td>

              {item.bookingStatus === "Pending" && (

                  <div className="booking-actions">

                      <button
                          className="btn btn-warning btn-sm"
                          onClick={() => handleOpenReschedule(item)}
                      >
                          Reschedule
                      </button>

                      <button
                          className="btn btn-dark btn-sm"
                          onClick={() => handleCancelBooking(item._id)}
                      >
                          Cancel
                      </button>

                  </div>

              )}

              {item.bookingStatus === "Completed" && (
                  <span className="text-success fw-bold">
                      Completed
                  </span>
              )}

              {item.bookingStatus === "Cancelled" && (
                  <span className="text-danger fw-bold">
                      Cancelled
                  </span>
              )}

          </td>

      </tr>

      ))}

      </tbody>

      </table>

      </div>

      </>

      )}

    </div>
{showReschedule && (
  <>
    <div
      className="modal fade show"
      style={{
        display: "block",
        background: "rgba(0,0,0,.5)",
      }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-4">

          <div className="modal-header">
            <h5 className="modal-title">
              Reschedule Booking
            </h5>

            <button
              className="btn-close"
              onClick={() => setShowReschedule(false)}
            />
          </div>

          <div className="modal-body">

            <div className="mb-3">

              <label className="form-label">
                Service Date
              </label>

              <input
                type="date"
                className="form-control"
                min={new Date().toISOString().split("T")[0]}
                value={rescheduleData.bookingDate}
                onChange={(e) =>
                  setRescheduleData({
                    ...rescheduleData,
                    bookingDate: e.target.value,
                  })
                }
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Service Time
              </label>

              <input
                type="time"
                className="form-control"
                min="09:00"
                max="20:00"
                value={rescheduleData.bookingTime}
                onChange={(e) =>
                  setRescheduleData({
                    ...rescheduleData,
                    bookingTime: e.target.value,
                  })
                }
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Address
              </label>

              <textarea
                rows="3"
                className="form-control"
                value={rescheduleData.address}
                onChange={(e) =>
                  setRescheduleData({
                    ...rescheduleData,
                    address: e.target.value,
                  })
                }
              />

            </div>

          </div>

          <div className="modal-footer">

            <button
              className="btn btn-secondary"
              onClick={() => setShowReschedule(false)}
            >
              Close
            </button>

            <button
              className="btn btn-warning text-white"
              onClick={handleReschedule}
            >
              Save Changes
            </button>

          </div>

        </div>
      </div>
    </div>

    <div className="modal-backdrop fade show"></div>
  </>
)}    
    <Footer />
  </>
  );
};

export default BookingPage;