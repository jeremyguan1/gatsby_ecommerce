import React, { useState } from "react"

const Product = () => {
  const strip = window.Stripe("pk_test_6I8xoRyaMLGUFkcItFFe0OZd00WOsjqp4Z")
  const [sku, setSku] = useState("sku_GROAZrTcVjSioi")

  const placeOrder = () => {
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
    <article>
      <img src="https://picsum.photos/340/400" alt="Level Up T-Shirt" />
      <h3>Level Up T-Shirt</h3>
      <select value={sku} onChange={e => setSku(e.target.value)}>
        <option value="sku_GROAZrTcVjSioi">Small</option>
        <option value="sku_GRI8WXUN5Jb7LL">Medium</option>
        <option value="sku_GRO6iuIbdNVj5L">Large</option>
      </select>
      <button onClick={placeOrder}>Buy Me</button>
    </article>
  )
}

export default Product
