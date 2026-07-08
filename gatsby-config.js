/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `FileProConverter`,
    description: `Free Online File Converter. Easy tool to convert different audio, video, image, e-book, document and archives conversions online.`,
    author: `Applicove, Inc`,
    keywords: `Free online file converter, online converter, file converter, best free file converter, convert file free online, free document converter, free image converter, free video converter, free archive converter, free e-book converter, free audio converter`,
    siteUrl: `https://fileproconverter.com`,
    image: `/brand-banner.png`
  }
  ,
  plugins: [
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
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`, `png`],
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
        name: `FileProConverter.com`,
        short_name: `FileProConverter.com`,
        description: `Free Online File Converter. Easy tool to convert different audio, video, image, e-book, document and archives conversions online.`,
        display: `standalone`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: '#7e56d9',
        icon: `src/images/manifest-icon.png`
      }
    }
  ]
};