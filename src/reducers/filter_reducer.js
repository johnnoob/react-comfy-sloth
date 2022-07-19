import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    const maxPrice = [...action.payload].reduce((max, item) => {
      if (item.price > max) {
        return item.price
      }
      return max
    }, 0)
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    }
  }
  if (action.type === SET_GRIDVIEW) {
    return {
      ...state,
      grid_view: true,
    }
  }
  if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      grid_view: false,
    }
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload }
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products: products } = state
    let tempProducts = [...products]
    if (sort === 'price-lowest') {
      tempProducts = tempProducts.sort((a, b) => {
        return a.price - b.price
      })
    }
    if (sort === 'price-highest') {
      tempProducts = tempProducts.sort((a, b) => {
        return b.price - a.price
      })
    }
    if (sort === 'name-a') {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
    }
    if (sort === 'name-z') {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name)
      })
    }
    return { ...state, filtered_products: tempProducts }
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload
    return { ...state, filters: { ...state.filters, [name]: value } }
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        company: 'all',
        category: 'all',
        color: 'all',
        price: state.filters.max_price,
        shipping: false,
      },
    }
  }
  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state
    const { text, company, category, color, price, shipping } = state.filters
    let tempProducts = [...all_products]
    // filtering
    // text
    if (text) {
      const re = new RegExp(`^${text}`, 'i')
      tempProducts = tempProducts.filter((product) => {
        return product.name.search(re) !== -1
      })
    }
    //category
    if (category !== 'all') {
      tempProducts = tempProducts.filter(
        (product) => product.category === category,
      )
    }
    // company
    if (company !== 'all') {
      tempProducts = tempProducts.filter(
        (product) => product.company === company,
      )
    }
    //color
    if (color !== 'all') {
      tempProducts = tempProducts.filter((product) =>
        product.colors.find((c) => c === color),
      )
    }
    //price
    if (price) {
      tempProducts = tempProducts.filter((product) => product.price <= price)
    }

    //shipping
    if (shipping) {
      tempProducts = tempProducts.filter((product) => product.shipping)
    }
    return { ...state, filtered_products: tempProducts }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
