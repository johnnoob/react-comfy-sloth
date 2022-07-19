import React from 'react'
import { useFilterContext } from '../context/filter_context'
import { useProductsContext } from '../context/products_context'
import GridView from './GridView'
import ListView from './ListView'
import Loading from './Loading'

const ProductList = () => {
  const { products_loading } = useProductsContext()
  const { filtered_products: products, grid_view } = useFilterContext()
  if (products_loading) {
    return <h5>Loading...</h5>
  }
  if (products.length < 1) {
    return <h5>沒有產品符合篩選條件</h5>
  }
  if (grid_view) {
    return <GridView products={products} />
  }
  return <ListView products={products} />
}

export default ProductList
