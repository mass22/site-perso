const config = require("./data/SiteConfig");
const pathPrefix = "";

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: `Massimo Russo - Développeur Front-end`,
    siteUrl: `https://www.russo-massimo.com`,
    image_url: `${config.siteUrl + pathPrefix}/logos/logo.png`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `h9ob7kgkg35g`,
        accessToken: `e0393b8d25904e2303c0921aee7c92c37d4f67021cd29b37a50c376c13534706`,
        host: `591fbea9088352b6c974f9cf718e8b48a15627ca244d3516dbda58d67d2f32a8`
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",

        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: "auto",
        lang: "fr-CA",
        background: "#fff",
        theme_color: "#fff",
        display: "standalone",
        orientation: "any",
        start_url: "/?homescreen=1",
        version: "1.0",

        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Pacifico:400`,
          `arimo:400`,
          `Quicksand:300,400,500,700` // you can also specify font weights and styles
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Massimo Russo",
        short_name: "Massimo Russo",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "minimal-ui",
        gcm_sender_id_comment:
          "For OneSignal Web Push Notifications, Do Not Change ID",
        gcm_sender_id: "c8d5d2c0-c2d6-47f6-8e0f-70f06b1bde7d",
        icons: [
          {
            // Everything in /static will be copied to an equivalent
            // directory in /public during development and build, so
            // assuming your favicons are in /static/favicons,
            // you can reference them here
            src: `/favicons/favicon.png`,
            sizes: `16x16`,
            type: `image/png`
          }
          // {
          //   src: `/favicons/android-chrome-512x512.png`,
          //   sizes: `512x512`,
          //   type: `image/png`,
          // },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true
      }
    },
    {
      resolve: "gatsby-plugin-purify-css",
      options: {
        /* Defaults */
        styleId: "gatsby-inlined-css",
        purifyOptions: {
          info: true,
          minify: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    //`gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: config.googleTagManagerId,

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false
      }
    },
    //Always last: Netlify
    `gatsby-plugin-netlify`
  ]
};
