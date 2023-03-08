import React from "react";
import { Link } from "gatsby";
import translations from "../utils/translations.json";
import { RichText } from "prismic-reactjs";

const Footer = (props) => {
  const page = props.footerData ? props.footerData.data : null;
  let lang;
  if (page) {
    lang = props.footerData.lang.split("-")[0];
  }
  return page ? (
    <footer className="upper-border">
      <div className="row w-full">
        <div className="md:w-3/12 w-full">
          <h3>SCENAREXinc</h3>
        </div>
        <div className="md:w-3/12 w-full md:ml-0">
          {RichText.render(page.column1_title.richText)}
          {page.column1_items && (
            <nav>
              <ul>
                {page.column1_items.map((item) => (
                  <li key={item.item_label}>
                    {item.item_url.link_type === 'Document' &&
                    <Link to={`/${lang}/${item.item_url.uid}`}>{item.item_label}</Link>
                    }
                    {item.item_url.link_type === 'Web' &&
                    <a href={item.item_url.url}>{item.item_label}</a>
                    }
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
        <div className="md:w-3/12 w-full ml-0">
          {RichText.render(page.column2_title.richText)}
          {page.column2_items && (
            <nav>
              <ul>
                {page.column2_items.map((item) => (
                  <li key={item.item_label}>
                    <i className={"fab " + item.item_icon}></i> <a href={item.item_url.url}>{item.item_label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
        <div className="md:w-3/12 w-full ml-0">
          <nav>
            <h3>
              {translations["footer_text"][lang]}&nbsp;
              <i className="fas fa-heart" style={{ color: "#E15554" }}></i>&nbsp;
              {translations["using"][lang]}
            </h3>
            {page.column3_items && (
              <ul>
                {page.column3_items.map((item) => (
                  <li key={item.item_label}>
                    <a href={item.item_url.url}>{item.item_label}</a>
                  </li>
                ))}
              </ul>
            )}
          </nav>
        </div>
        <div className="w-full">
          <h4>{translations["newsletter"][lang]}</h4>
          <form
            action={
              lang === "en"
                ? "https://scenarex.us14.list-manage.com/subscribe/post?u=55adcdb3618aefdb354ae8f92&amp;id=b554781cb8&SIGNUP=SCENAREX-" + lang
                : "https://scenarex.us14.list-manage.com/subscribe/post?u=55adcdb3618aefdb354ae8f92&amp;id=ec466ad45e&SIGNUP=SCENAREX-" + lang
            }
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate row"
            target="_blank"
            noValidate
          >
            <div className="mc-field-group md:w-6/12 w-full">
              <input type="email" defaultValue="" placeholder={translations["email"][lang]} name="EMAIL" className="required email" id="mce-EMAIL" />
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
              <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
            </div>
            <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
              <input type="text" name="b_55adcdb3618aefdb354ae8f92_b554781cb8" tabIndex="-1" defaultValue="" />
            </div>
            <div className="clear md:w-3/12 w-full ml-0">
              <button className="button bg-mastheadColor" type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe">
                <i className="fas fa-info-circle"></i>&nbsp;
                {translations["subscribe"][lang]}
              </button>
            </div>
          </form>
        </div>
        <div className="w-full copyright py-8 flex justify-center items-center">
          <div className="mr-1">
            <i className="fab fa-creative-commons"></i>&nbsp;
            <i className="fab fa-creative-commons-by"></i>&nbsp;
            <i className="fab fa-creative-commons-sa"></i>
          </div>
          <div>
            <small>
              {translations["copyright"][lang]}
              <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
                Creative Commons Attribution-ShareAlike 4.0 International License
              </a>
            </small>
          </div>
        </div>
      </div>
    </footer>
  ) : null;
};

export { Footer };
