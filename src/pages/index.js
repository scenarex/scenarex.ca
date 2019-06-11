import React from 'react';
import { navigate, withPrefix } from 'gatsby';
import { getLang } from "../libs/utility";
import Layout from "../components/layout";

class RedirectIndex extends React.PureComponent {
  constructor() {
    super();

    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      const langKey = getLang();
      const homeUrl = withPrefix(`/${langKey}/`);

      navigate(homeUrl);
    }
  }

  render() {
    // It's recommended to add your SEO solution in here for bots
    // eg. https://github.com/ahimsayogajp/ahimsayoga-gatsby/blob/master/src/pages/index.js#L22
    return (
      <Layout title={"SCENAREXinc - A blockchain company"}/>
  );
  }
}

export default RedirectIndex;