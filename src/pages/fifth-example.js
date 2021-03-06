import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import NextButton from '../components/NextButton'
import ComplexAnimation from '../animations/complexAnimation'

const ThirdPage = () => (
  <Layout >
    <SEO title="Page two" />
    <h1>Many Timelines, Many Components</h1>
    <div style={{ marginBottom: "16px"}}>
      <ComplexAnimation />
    </div>
    <NextButton to="/sixth-example" />
  </Layout>
)

export default ThirdPage
