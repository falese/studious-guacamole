require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Sean's API Page`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", 
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "docs",
      "path": "./docs/"
    },

    __key: "pages"
  },"gatsby-plugin-image",{
  resolve: 'gatsby-source-filesystem',
  options: {
    "name": "specs",
    "path": "./specs/"
  },
},
  "gatsby-plugin-sharp",]
};