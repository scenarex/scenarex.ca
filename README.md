# Scenarex public website at www.scenarex.ca

## Pre-requisites

This site is managed using [Github](https://developer.github.com/webhooks/) hooks and [Gaysby](https://www.gatsbyjs.org/).

## Local development

To run the site locally at http://localhost:8000:
```bash
$ gatsby develop
```

To prepare the site for deployment:
```bash
$ amplify publish
```

The `public` folder will then contain the built site with production URLs and properties.

## Licence

This site's code is published under an MIT licence.
