module.exports = {
  siteMetadata: {
    title: 'Measure your factfulness',
    description: 'Measure your factfulness. Factfulness is the stress-reducing habit of only carrying opinions for which you have strong supporting facts.',
    keywords: 'factfulness, book, hans rosling, world, data'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '3yfija422ym3',
        accessToken: '19ef99a8f4671346ee8901d3c70f8145330add18e66b6a393344245727bd0629'
      }
    }
  ],
}
