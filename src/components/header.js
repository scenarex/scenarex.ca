import React from "react";
import { Link } from "gatsby";
import translations from "../utils/translations.json";
import routes from "../utils/routes.json";
import LanguageSwitcher from "./Language";

const Header = props => {
  console.log(props);
  const data = props.headerData ? props.headerData.allHeaders.edges[0].node : null;
  console.log(data)
  let lang;
  let path;
  if (data){
      lang = data._meta.lang;
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
                  <Link to={`/${lang}/${menuItem.ref}`} className={path === menuItem.ref ? "active" : ""}>{menuItem.link_label}</Link>
                   { path === "/" ?
                   <div>
                     <br/><Link to={`/${lang}/bookchain`} className="more menu" ><i className="fas fa-arrow-up fa-2x"></i><br/>{translations["main_text"][lang]}</Link>
                   </div>
                   : null
                   }
                </li>
                :
               <li key={menuItem.link_label}><Link to={menuItem.ref ? routes[menuItem.ref][lang] : routes["news"][lang]} className={path === menuItem.ref ? "active" : ""}>{menuItem.link_label}</Link></li>
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
  }



export { Header };
