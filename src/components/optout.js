import React, { useState, useEffect } from 'react';
import { Link } from "gatsby";
import translations from "../utils/translations.json";
import routes from "../utils/routes.json";

const ConsentPopup = (props) => {
  const data = props.headerData ? props.headerData.data : null;
  var lang = "";
  if (data) {
    lang = props.headerData.lang;
  } else {
    lang = "en";
  }
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const consent = document.cookie.split("; ").find((row) => row.startsWith("consent="));
    if (!consent) {
      setShowPopup(true);
    }
  },[]);

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
      <div className="bottom-0 fixed border-t w-full bg-white p-4 shadow-md text-sm">
        <div className="gdpr-popup-content container mx-auto">
          <p>{translations.consent_1[lang]}</p>
          <p>{translations.consent_2[lang]} <Link className="text-scenarexGreen" to={routes.privacy[lang]}>{translations.policy[lang]}</Link>.</p>
          <div className="gdpr-popup-actions grid grid-cols-2 gap-4 w-1/3">
            <button onClick={handleReject}>{translations.refuse[lang]}</button>
            <button onClick={handleAccept}>{translations.accept[lang]}</button>
          </div>
        </div>
      </div>
    )
  );
}

export default ConsentPopup;
