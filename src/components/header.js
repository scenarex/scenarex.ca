import React from "react";
import { Link } from "gatsby";
import LanguageSwitcher from "./Language";

export const HeaderTemplate = ({ data, langKey, path }) => (
  <header className="masthead">
     <h1 className="masthead-title">
       <Link to={`/${langKey}`}><img src={data.logo} alt=""/></Link>
     </h1>
     <nav>
       <ul>
        {data.menuItems.map(menuItem =>(
          menuItem.label === "Bookchain®" ?
            <li key={menuItem.label}>
              <Link to={menuItem.linkURL} className={path === menuItem.ref ? "active" : ""}>{menuItem.label}</Link>
               { path === "Index" ?
               <div>
                 <br/><Link to={`/${langKey}/bookchain`} className="more menu" ><i className="fas fa-arrow-up fa-2x"></i><br/>{data.discover}</Link>
               </div>
               : null
               }
            </li>
            :
           <li key={menuItem.label}><Link to={menuItem.linkURL} className={path === menuItem.ref ? "active" : ""}>{menuItem.label}</Link></li>
         ))}
         <li>
         <LanguageSwitcher lang={langKey} path={path}/>
         </li>
       </ul>
     </nav>
  </header>
);

const Header = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data.edges[0].node;
  return <HeaderTemplate data={data.frontmatter} langKey={data.fields.langKey} path={props.path}/>;
};


export { Header };
