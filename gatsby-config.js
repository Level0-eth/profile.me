/**
 * @type {import('gatsby').GatsbyConfig}
 */
/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: `profile.me`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/"
      },
      __key: "pages"
    }
  ]
};
