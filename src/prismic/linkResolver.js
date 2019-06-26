const i18n = require('../utils/i18n')
const routes = require("../utils/routes.json");
const linkResolver = doc => {
  console.log("here");
  console.log(doc);
  return `/${doc.uid}`
}

module.exports = linkResolver
