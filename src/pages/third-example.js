import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimatingLists from '../components/AnimatingLists'

const ThirdPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Mapping Over Elements</h1>
    <AnimatingLists />
    <Link to="/">Next Example</Link>
  </Layout>
)

export default ThirdPage
