exports.linkResolver = (doc) => {
  if (["en", "fr"].includes(doc.lang)) {
    switch (doc.type) {
      case "home": {
        return doc.lang === "en" ? "/" : `/${doc.lang}`;
      }

      default: {
        return `/${doc.lang}/${doc.uid}`;
      }
    }
  }
};
