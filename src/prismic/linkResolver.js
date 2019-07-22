
const routes = require('../utils/routes.json')

const linkResolver = doc => {
const route = `${doc.lang}/${routes[doc.uid]}`;
console.log(route)
return `${doc.lang}/${routes[doc.uid]}`
}

module.exports = linkResolver
