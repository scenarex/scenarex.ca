# Scenarex public website at www.scenarex.ca

## Pre-requisites

This site is managed using [Github](https://developer.github.com/webhooks/) hooks and [Jekyll](https://jekyllrb.com/).

## Local development

To run the site locally at http://localhost:4000:
```bash
$ jekyll serve
```

To prepare the site for deployment:
```bash
$ JEKYLL_ENV=production jekyll build
```

The `_site` folder will then contain the built site with production URLs and properties.

## Licence

This site's code is published under an MIT licence.
