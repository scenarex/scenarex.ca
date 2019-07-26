
const routes = require('../utils/routes.json')

const linkResolver = doc => {
  if (doc.type === "member") {
    return `/${doc.uid}`;
  }
  return `/`;
}

module.exports = linkResolver
