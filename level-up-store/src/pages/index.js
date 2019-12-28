import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const strip = window.Stripe("pk_test_6I8xoRyaMLGUFkcItFFe0OZd00WOsjqp4Z")

  const placeOrder = sku => {
    strip.redirectToCheckout({
      items: [
        {
          sku,
          quantity: 1,
        },
      ],
      successUrl: "http://localhost:8000/success",
      cancelUrl: "http://localhost:8000/cancel",
    })
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <article>
          <img src="https://picsum.photos/340/400" alt="Level Up T-Shirt" />
          <h3>Level Up T-Shirt</h3>
          <button onClick={() => placeOrder("sku_GRI8WXUN5Jb7LL")}>
            Buy Me
          </button>
        </article>
      </div>
    </Layout>
  )
}

export default IndexPage
