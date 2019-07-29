
const routes = require('../utils/routes.json')

const linkResolver = doc => {
  console.log(doc)
  if (doc.type === "member") {
    return `/${doc.uid}`;
  }
  return `/en-ca`;
}

module.exports = linkResolver
