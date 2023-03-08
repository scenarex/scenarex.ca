import React from "react";
import { Link } from "gatsby";

export default function LanguageSwitcher(props) {
  const currentLanguage = props.lang;
  let alternateLanguage = "";
  switch(currentLanguage) {
    case "en":
      alternateLanguage = "fr";
      break;
    case "fr":
      alternateLanguage = "en";
      break;
    default:
      break;
  }

  const currentPath = props.path;
  const alternatePath = props.alternate.find(({ lang }) => lang === alternateLanguage);

  return (
    <div>
      <Link
        to={currentLanguage === "en" ? `${currentPath}` : `${alternatePath.uid === "index" ? "/" : '/en/'+alternatePath.uid}`}
        className={currentLanguage === "en" ? "activeLang" : "lang"}
      >
        en
      </Link>
      &nbsp;
      <Link
        to={currentLanguage === "fr" ? `${currentPath}` : `/fr/${alternatePath.uid === "index" ? "" : alternatePath.uid}`}
        className={currentLanguage === "fr" ? "activeLang" : "lang"}
      >
        fr
      </Link>
    </div>
  );
}
