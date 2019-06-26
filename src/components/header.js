import React from "react";
import { Link } from "gatsby";
import translations from "../utils/translations.json";
import routes from "../utils/routes.json";
import LanguageSwitcher from "./Language";

const Header = props => {
  const data = props.headerData ? props.headerData.allHeaders.edges[0].node : null;
  let lang;
  let path;
  if (data){
    lang = (data._meta.lang.split("-") )[0];
    path = props.path;
  }
  return (
    data ?
    <header className="masthead">
       <h1 className="masthead-title">
         <Link to={`/${lang}`}><img src={data.header_logo.url} alt=""/></Link>
       </h1>
       <nav>
         <ul>
          {data.menu_items.map(menuItem =>(
            menuItem.link_label === "Bookchain®" ?
              <li key={menuItem.link_label}>
                <Link to={`/${lang}/${menuItem.link_url._meta.uid}`} className={path === menuItem.ref ? "active" : ""}>{menuItem.link_label}</Link>
                 { path === "/" ?
                 <div>
                   <br/><Link to={`/${lang}/bookchain`} className="more menu" ><i className="fas fa-arrow-up fa-2x"></i><br/>{translations["main_text"][lang]}</Link>
                 </div>
                 : null
                 }
              </li>
              :
             <li key={menuItem.link_label}><Link to={menuItem.link_url ? routes[menuItem.link_url._meta.uid][lang] : routes["news"][lang]} className={path === menuItem.ref ? "active" : ""}>{menuItem.link_label}</Link></li>
           ))}
           <li>
            <LanguageSwitcher lang={lang} path={path}/>
           </li>
         </ul>
       </nav>
    </header>
    :
    null
  )
};


export {Header};
