import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import NextButton from '../components/NextButton'
import NestedTimelines from '../animations/nestedTimelines'

const ThirdPage = () => (
  <Layout >
    <SEO title="Page two" />
    <h1>Nested Timelines</h1>
    <div style={{ marginBottom: "16px"}}>
      <NestedTimelines />
    </div>
    <NextButton to="/wrapping-up" />
  </Layout>
)

export default ThirdPage
