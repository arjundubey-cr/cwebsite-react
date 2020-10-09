import React, { useState, useEffect } from 'react'
import axios from 'axios'
const ProductScreen = () => {
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get('/api/products')
      setProduct(data)
    }
    fetchProduct()
  }, [])
  return (
    <div>
      <h1>Product Screen</h1>
    </div>
  )
}

export default ProductScreen
