import React from "react";
import { Link } from "gatsby";
import translations from "../utils/translations.json";
import LanguageSwitcher from "./Language";

const Header = props => {
  const data = props.headerData ? props.headerData.allHeaders.edges[0].node : null;
  console.log(props);
  let lang;
  let path;
  let alternate;
  if (data){
    lang = (data._meta.lang.split("-") )[0];
    path = props.path;
    alternate = props.alternate;
  }
  return (
    data ?
    <header className="masthead">
       <h1 className="masthead-title">
         <Link to={`/${lang}`}><img src={data.logo.url} alt=""/></Link>
       </h1>
       <nav>
         <ul>
          {data.navigation.map(menuItem => {
            return (
              menuItem.link._meta.uid === "bookchain" ?
              <li key={menuItem.link._meta.uid}>
                <Link to={`/${lang}/${menuItem.link._meta.uid}`} className={path === menuItem.ref ? "active" : ""}>{menuItem.link.title[0].text}</Link>
                 { path === "/" ?
                 <div>
                   <br/><Link to={`/${lang}/bookchain`} className="more menu" ><i className="fas fa-arrow-up fa-2x"></i><br/>{translations["main_text"][lang]}</Link>
                 </div>
                 : null
                 }
              </li>
              :
             <li key={menuItem.link._meta.uid}><Link to={`/${lang}/${menuItem.link._meta.uid}`} className={path === menuItem.ref ? "active" : ""}>{menuItem.link.title[0].text}</Link></li>
           )})}
           <li>
            <LanguageSwitcher lang={lang} path={path} alternate={alternate} />
           </li>
         </ul>
       </nav>
    </header>
    :
    null
  )
};


export {Header};
