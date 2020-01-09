import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import NextButton from '../components/NextButton'
import ComplexAnimation from '../animations/complexAnimation'

const ThirdPage = () => (
  <Layout >
    <SEO title="Page two" />
    <h1>Multiple TimeLines</h1>
    <div style={{ marginBottom: "16px"}}>
      <ComplexAnimation />
    </div>
    <NextButton to="/wrapping-up" />
  </Layout>
)

export default ThirdPage
