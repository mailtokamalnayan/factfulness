import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import './index.css'
import Footer from '../components/Footer';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    />
    <Helmet>
      <meta property="og:image" content="https://preview.ibb.co/g254RK/site_cover.png" />
    </Helmet>
      {children()}
      <Footer data={data} />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    allContentfulFooter(sort: {fields: [createdAt], order: ASC}){
      edges {
        node {
          link
          url
          createdAt
        }
      }
    }
  }
`
