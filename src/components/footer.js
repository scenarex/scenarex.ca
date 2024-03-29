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
        <div className="w-full copyright py-8 flex justify-center items-center">
          <div className="mr-1">
            <i className="fab fa-creative-commons"></i>&nbsp;
            <i className="fab fa-creative-commons-by"></i>&nbsp;
            <i className="fab fa-creative-commons-sa"></i>
          </div>
          <div>
            <small>
              {translations["copyright"][lang]}&nbsp;
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
