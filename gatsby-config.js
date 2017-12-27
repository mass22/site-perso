module.exports = {
  siteMetadata: {
    title: `Massimo Russo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `h9ob7kgkg35g`,
        accessToken: `e0393b8d25904e2303c0921aee7c92c37d4f67021cd29b37a50c376c13534706`,
        host: `591fbea9088352b6c974f9cf718e8b48a15627ca244d3516dbda58d67d2f32a8`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "minimal-ui",
        // icons: [
        //   {
        //     // Everything in /static will be copied to an equivalent
        //     // directory in /public during development and build, so
        //     // assuming your favicons are in /static/favicons,
        //     // you can reference them here
        //     src: `/favicons/android-chrome-192x192.png`,
        //     sizes: `192x192`,
        //     type: `image/png`,
        //   },
        //   {
        //     src: `/favicons/android-chrome-512x512.png`,
        //     sizes: `512x512`,
        //     type: `image/png`,
        //   },
        // ],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    {
      resolve: 'gatsby-plugin-purify-css',
      options: {
        /* Defaults */
        styleId: 'gatsby-inlined-css',
        purifyOptions: {
          info: true,
          minify: true
        }
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
  ],
}