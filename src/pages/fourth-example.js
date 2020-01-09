import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import NextButton from '../components/NextButton'
import Modal from '../animations/modal'

const ThirdPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Implementing a Modal</h1>
    <Modal />
    <NextButton to="/fifth-example" />
  </Layout>
)

export default ThirdPage
