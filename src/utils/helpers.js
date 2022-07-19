import _ from 'lodash'
export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100)
  return newNumber
}

export const getUniqueValues = (all_products, categoryString) => {
  const tempCategory = all_products.map((product) => {
    return product[categoryString]
  })
  return ['all', ...new Set(tempCategory.flat())]
}
