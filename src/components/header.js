import React from 'react'
import { Link } from 'gatsby'
import translations from '../utils/translations.json'
import LanguageSwitcher from './Language'

const Header = props => {
  const data = props.headerData ? props.headerData.data : null
  let lang
  let path
  let alternate
  if (data) {
    lang = props.headerData.lang.split('-')[0]
    path = props.path
    alternate = props.alternate
  }
  return data ? (
    <header className="masthead">
      <h1 className="masthead-title">
        <Link to={`/${lang}`}>
          <img src={data.logo.url} alt="" />
        </Link>
      </h1>
      <nav>
        <ul>
          {data.navigation.map(menuItem => {
            return menuItem.link.document.uid === 'bookchain' ? (
              <li key={menuItem.link.document.uid}>
                <Link
                  to={`/${lang}/${menuItem.link.document.uid}`}
                  className={path === menuItem.ref ? 'active' : ''}
                >
                  {menuItem.link.document.data.title.text}
                </Link>
                {path === '/' ? (
                  <div>
                    <br />
                    <Link to={`/${lang}/bookchain`} className="more menu">
                      <i className="fas fa-arrow-up fa-2x"></i>
                      <br />
                      {translations['main_text'][lang]}
                    </Link>
                  </div>
                ) : null}
              </li>
            ) : (
              <li key={menuItem.link.document.uid}>
                <Link
                  to={`/${lang}/${menuItem.link.document.uid}`}
                  className={path === menuItem.ref ? 'active' : ''}
                >
                  {menuItem.link.document.data.title.text}
                </Link>
              </li>
            )
          })}
          <li>
            <LanguageSwitcher lang={lang} path={path} alternate={alternate} />
          </li>
        </ul>
      </nav>
    </header>
  ) : null
}

export { Header }
