import React from "react";
import { Link } from "gatsby";
import translations from "../utils/translations.json";
import routes from "../utils/routes.json";
import { RichText } from 'prismic-reactjs';

const Footer = props => {
  const page = props.footerData ? props.footerData.allFos.edges[0].node : null;
  let lang;
  if (page){
  lang = (page._meta.lang.split("-") )[0];
  }
  return (
    page ?
    <footer className="upper-border">
      <div className="row">
        <div className="3u 6u(small)">
          <h3>SCENAREXinc</h3>
        </div>
        <div className="3u 6u$(small)">
          {RichText.render(page.column1_title)}
          {page.column1_items &&
          <nav>
            <ul>
              {page.column1_items.map(item =>
                <li key={item.item_label}><Link to={item.item_url ? routes[item.item_url._meta.uid][lang] : routes["news"][lang]}>{item.item_label}</Link></li>
              )}
            </ul>
          </nav>
          }
        </div>
        <div className="3u 6u(small)">
          {RichText.render(page.column2_title)}
          {page.column2_items &&
          <nav>
            <ul>
              {page.column2_items.map(item =>
                <li key={item.item_label}><i className={item.item_icon}></i> <a href={item.item_url.url}>{item.item_label}</a></li>
              )}
            </ul>
          </nav>
          }
        </div>
        <div className="3u 6u$(small)">
          <nav>
            <h3>{translations["footer_text"][lang]}<i className="fas fa-heart" style={{color: "#E15554"}}></i>{translations["using"][lang]}</h3>
            {page.column3_items &&
              <ul>
              {page.column3_items.map(item =>
                <li key={item.item_label}><a href={item.item_url.url}>{item.item_label}</a></li>
              )}
              </ul>
            }
          </nav>
        </div>
        <div className="12u">
          <h3>{translations["newsletter"][lang]}</h3>
          <form action={lang === "en" ?
            "https://scenarex.us14.list-manage.com/subscribe/post?u=55adcdb3618aefdb354ae8f92&amp;id=b554781cb8&SIGNUP=SCENAREX-" +lang
            :
            "https://scenarex.us14.list-manage.com/subscribe/post?u=55adcdb3618aefdb354ae8f92&amp;id=ec466ad45e&SIGNUP=SCENAREX-" +lang
            } method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate row" target="_blank" noValidate>
            <div className="mc-field-group 6u 12u(small)">
              <input type="email" defaultValue="" placeholder={translations["email"][lang]} name="EMAIL" className="required email" id="mce-EMAIL"/>
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{display:"none"}}></div>
              <div className="response" id="mce-success-response" style={{display:"none"}}></div>
            </div>
            <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_55adcdb3618aefdb354ae8f92_b554781cb8" tabIndex="-1" defaultValue=""/></div>
            <div className="clear 3u 12u(small)"><button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"><i className="fas fa-info-circle"></i>&nbsp;{translations["subscribe"][lang]}</button></div>
          </form>
        </div>
        <div className="12u$ copyright">
          <i className="fab fa-creative-commons"></i> <i className="fab fa-creative-commons-by"></i> <i className="fab fa-creative-commons-sa"></i>
          <small>{translations["copyright"][lang]}<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"> Creative Commons Attribution-ShareAlike 4.0 International License</a>.</small>
        </div>
      </div>
    </footer>
    :
    null
  )
};


export { Footer };
