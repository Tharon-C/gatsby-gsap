import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Thank You!</h1>
    <h3>What's Next?</h3>
    <ul>
      <li>
        <a href="https://greensock.com/docs/v3">Read the Docs</a>
      </li>
      <li>
        <a href="https://greensock.com/blog/">Read the Tutorials</a>
      </li> 
    </ul>
  </Layout>
)

export default ThirdPage
