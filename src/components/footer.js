import React from "react";
import { Link } from "gatsby";

export const FooterTemplate = ({ data, langKey }) => (
  <footer className="upper-border">
    <div className="row">
      <div className="3u 6u(small)">
        <h3>SCENAREXinc</h3>
      </div>
      <div className="3u 6u$(small)">
        <h3>{data.contentTitle}</h3>
        {data.contentItems &&
        <nav>
          <ul>
            {data.contentItems.map(item =>
              <li key={item.label}><Link to={item.linkURL}>{item.label}</Link></li>
            )}
          </ul>
        </nav>
        }
      </div>
      <div className="3u 6u(small)">
        <h3>{data.socialTitle}</h3>
        {data.socialItems &&
        <nav>
          <ul>
            {data.socialItems.map(item =>
              <li key={item.label}><i className={item.icon}></i> <a href={item.linkURL}>{item.label}</a></li>
            )}
          </ul>
        </nav>
        }
      </div>
      <div className="3u 6u$(small)">
        <nav>
          <h3>{data.madeTitle}<i className="fas fa-heart" style={{color: "#E15554"}}></i>{data.translations.using}</h3>
          {data.madeItems &&
            <ul>
            {data.madeItems.map(item =>
              <li key={item.label}><a href={item.linkURL}>{item.label}</a></li>
            )}
            </ul>
          }
        </nav>
      </div>
      <div className="12u">
        <h3>{data.translations.newsletter}</h3>
        <form action={"https://scenarex.us14.list-manage.com/subscribe/post?u=55adcdb3618aefdb354ae8f92&amp;id=b554781cb8&SIGNUP=SCENAREX-" +langKey} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate row" target="_blank" noValidate>
          <div className="mc-field-group 6u 12u(small)">
            <input type="email" defaultValue="" placeholder={data.translations.email} name="EMAIL" className="required email" id="mce-EMAIL"/>
          </div>
          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response" style={{display:"none"}}></div>
            <div className="response" id="mce-success-response" style={{display:"none"}}></div>
          </div>
          <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_55adcdb3618aefdb354ae8f92_b554781cb8" tabIndex="-1" defaultValue=""/></div>
          <div className="clear 3u 12u(small)"><button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"><i className="fas fa-info-circle"></i>&nbsp;{data.translations.subscribe}</button></div>
        </form>
      </div>
      <div className="12u$ copyright">
        <i className="fab fa-creative-commons"></i> <i className="fab fa-creative-commons-by"></i> <i className="fab fa-creative-commons-sa"></i>
        <small>{data.translations.copyright}<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"> Creative Commons Attribution-ShareAlike 4.0 International License</a>.</small>
      </div>
    </div>
  </footer>
);

const Footer = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data.edges[0].node;
  return <FooterTemplate data={data.frontmatter} langKey={data.fields.langKey}/>;
};


export { Footer };
