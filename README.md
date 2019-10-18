# gwu-website-template

> Template for creating your own GWU chapter website using web's best practices

## Installation

To make your own copy of the templated website

1. [Fork this repository](https://github.com/Cobertos/GWU-website-template/fork)
TODO:
2. Configure GitHub Actions...
3. Trigger GitHub Actions...
4. Use a Content Delivery Network (CDN) (recommended, but not required)
 1. Cloudflare suggestion w/ pictures...

To use a third party host (Amazon S3, Netlify), the process is similar but you will need to swap out the GitHub action for deploying to gh-pages with one that deploys to the service you'd like to use.

If you have any questions, feel free to make an issue (TODO LINK)

## Contributing

This website is built on [Nuxt.js](https://nuxtjs.org) and is meant to be built as a static website. This means the website functions as-is and can be deployed to any static content host after being compiled. It requires no CMS or server-side components meaning a lot less management overhead.

It is meant to support IE11, Edge, Firefox, Chrome, and Safari. If you have a bug please submit a report.

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
