import React, { useState } from 'react';
import './PayPremium.css';
import poster from '../../assets/payment-poster.webp';

const PayPremium: React.FC = () => {
  const [mobile, setMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [verified, setVerified] = useState(false);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobile.length === 10) {
      setOtpSent(true);
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === '123456') {
      setVerified(true);
    }
  };

  const handlePayment = () => {
    alert('Redirecting to payment gateway...');
    // Integration like Razorpay or Stripe would go here
  };

  return (
    <div className="pay-container">
      <div className="left-side">
        <img src={poster} alt="Insurance Poster" className="poster-img" />
      </div>

      <div className="right-side">
        <div className="form-box">
          <h2 className="form-title">Pay Your Premium</h2>

          {!otpSent && !verified && (
            <form className="premium-form" onSubmit={handleSendOtp}>
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                className="form-input"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                maxLength={10}
                required
              />
              <button type="submit" className="form-button">
                Send OTP
              </button>
            </form>
          )}

          {otpSent && !verified && (
            <form className="premium-form" onSubmit={handleVerifyOtp}>
              <input
                type="text"
                placeholder="Enter OTP"
                className="form-input"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={6}
                required
              />
              <button type="submit" className="form-button">
                Verify OTP
              </button>
            </form>
          )}

          {verified && (
            <div className="user-info">
              <p><strong>Name:</strong> Ravikant Sharma</p>
              <p><strong>Policy No:</strong> ABC123456</p>
              <p><strong>Premium Due:</strong> ₹3,250</p>
              <button className="form-button" onClick={handlePayment}>
                Proceed to Payment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PayPremium;
