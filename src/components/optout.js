import React, { useState, useEffect } from 'react';

function ConsentPopup() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const consent = document.cookie.split("; ").find((row) => row.startsWith("consent="));
    if (consent) {
      setShowPopup(false);
    }
  });

  const handleReject = () => {
    document.cookie = 'consent=rejected; expires=365d; path=/';
    window.gaOptout();
    setShowPopup(false);
  };

  const handleAccept = () => {
    document.cookie = 'consent=accepted; expires=365d; path=/'; // Expires in 365 days

    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="bottom-0 fixed border-t w-full bg-white">
        <div className="gdpr-popup-content">
          <h2>GDPR and Law 25 Consent</h2>
          <p>
            We use cookies and collect data to enhance your experience on our website.
            By clicking "Accept," you consent to our use of cookies and data collection.
          </p>
          <div className="gdpr-popup-actions">
            <button onClick={handleReject}>Decline</button>
            <button onClick={handleAccept}>Accept</button>
          </div>
        </div>
      </div>
    )
  );
}

export default ConsentPopup;
