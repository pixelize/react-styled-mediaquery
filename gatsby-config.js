
module.exports = {
  pathPrefix: "/react-styled-mediaquery",
  plugins: [
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/gatsby/pages`,
      },
    },
  ],
}
