/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Any-Converter.com`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        sitemap: "https://fileproconverter.com/sitemap-index.xml"
      }
    },
    {
      resolve: `gatsby-plugin-brotli`,
      options: {
        level: 4 // best level for fetching and compressing/decompressing on web browsers 
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager-timeout`,
      options: {
        id: process.env.GTM_CONTAINER_ID,
        includeInDevelopment: false,
        timeout: 1000,
        enableWebVitalsTracking: true,
        defaultDataLayer: { platform: `gatsby` }
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `blurred`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true,
        develop: true,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svg/
        }
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Any-Converter.com`,
        short_name: `Any-Converter.com`,
        description: ``,
        display: `standalone`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: '#a0eed5',
        icon: `src/images/manifest-icon.png`
      }
    }
  ]
};