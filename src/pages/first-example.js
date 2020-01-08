import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SimpleTween from '../components/SimpleTweenWithClass'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Basic Example</h1>
    <SimpleTween />
    <Link to="/second-example">Go to Second Example</Link>
  </Layout>
)

export default SecondPage
