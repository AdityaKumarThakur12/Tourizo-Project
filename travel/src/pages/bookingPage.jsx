import React, { useState } from 'react';
import { db } from '../firebaseConfig/firebase';
import "../styles/booking.css";
import { set, ref } from 'firebase/database';  // Import Firebase functions
import { useNavigate } from 'react-router-dom';
import logo from "../images/tourLogo.png"

const SuccessModal = ({ onClose }) => {
  const navigate = useNavigate();
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Success!</h2>
        <p>Your trip has been booked successfully!</p>
        <button onClick={() => {
          navigate("/");
          onClose();
        }}>Close</button>
      </div>
    </div>
  );
};

const BookingPage = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    destination: '',
    paymentDetails: '',
    paymentMode: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [totalCost] = useState("50,000"); // Static payment details in Rupees

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add user data along with payment information to Firebase Realtime Database
    try {
      // Push data to the bookings node in Firebase Realtime Database
      const newBookingRef = ref(db, 'bookings/' + Date.now()); // Using timestamp as unique key
      await set(newBookingRef, {
        name: userData.name,
        email: userData.email,
        destination: userData.destination,
        paymentDetails: userData.paymentDetails,
        paymentMode: userData.paymentMode,
        totalCost: totalCost,
        timestamp: new Date().toISOString(),
      });

      // Simulate a successful booking and show the success modal
      console.log('Trip booked:', userData);
      setShowModal(true);
    } catch (error) {
      console.error('Error saving booking data: ', error);
    }
  };

  return (
    <div className='bookings-content'>
      <div className="booking-page">
        <img src={logo} style={{height:"70px"}}/>
        <h1>Book Your Trip</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            required
          />
          <label>
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            required
          />
          <label>
            Destination:
          </label>
          <input
            type="text"
            name="destination"
            value={userData.destination}
            onChange={handleInputChange}
            required
          />
          <label>
            Payment Details:
          </label>
          <input
            type="text"
            name="paymentDetails"
            value={userData.paymentDetails}
            onChange={handleInputChange}
            required
          />

          {/* Payment Mode Options */}
          <label>
            Payment Mode:
            <div className="payment-mode">
              <label>
                <input
                  type="radio"
                  name="paymentMode"
                  value="creditCard"
                  checked={userData.paymentMode === 'creditCard'}
                  onChange={handleInputChange}
                />
                Credit Card
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMode"
                  value="debitCard"
                  checked={userData.paymentMode === 'debitCard'}
                  onChange={handleInputChange}
                />
                Debit Card
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMode"
                  value="upi"
                  checked={userData.paymentMode === 'upi'}
                  onChange={handleInputChange}
                />
                UPI
              </label>
            </div>
          </label>

          {/* Static Payment Details */}
          <div className="payment-summary">
            <p><strong>Total Cost:</strong> ₹{totalCost}</p>
          </div>

          <button type="submit">Submit</button>
        </form>

        {/* Success Modal */}
        {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
      </div>
    </div>
  );
};

export default BookingPage;
