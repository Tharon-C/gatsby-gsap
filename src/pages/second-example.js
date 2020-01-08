import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SimpleTween from '../components/SimpleTweenWithHooks'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Basic Example With Hooks</h1>
    <SimpleTween />
    <Link to="/third-example">Next Example</Link>
  </Layout>
)

export default SecondPage
