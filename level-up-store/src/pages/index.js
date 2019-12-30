import React, { useState } from "react"
import Product from "../components/product"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <Product />
        <Product />
        <Product />
      </div>
    </Layout>
  )
}

export default IndexPage
