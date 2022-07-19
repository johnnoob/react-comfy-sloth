import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product, shipping } = action.payload
    const tempItem = state.cart.find((item) => item.id === id + color)
    if (tempItem) {
      const tempCart = state.cart.map((item) => {
        if (item.id === id + color) {
          let newAmount = item.amount + amount
          if (newAmount > item.max) {
            newAmount = item.max
          }
          return { ...item, amount: newAmount }
        } else {
          return item
        }
      })
      return { ...state, cart: [...tempCart] }
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
        shipping,
      }
      return { ...state, cart: [...state.cart, newItem] }
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const { id } = action.payload
    const tempCart = state.cart.filter((item) => item.id !== id)
    return { ...state, cart: tempCart }
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] }
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        let newAmount = item.amount + value
        if (newAmount > item.max) {
          newAmount = item.max
        }
        if (newAmount < 1) {
          newAmount = 1
        }
        return { ...item, amount: newAmount }
      }
      return item
    })
    return { ...state, cart: tempCart }
  }
  if (action.type === COUNT_CART_TOTALS) {
    const shipping = state.cart.every((item) => item.shipping === true)
    const { total_items, total_amount } = state.cart.reduce(
      (total, item) => {
        return {
          total_items: (total.total_items += 1),
          total_amount: total.total_amount + item.amount * item.price,
        }
      },
      { total_items: 0, total_amount: 0 },
    )
    return { ...state, total_items, total_amount, shipping }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer

// addToCart(id, mainColor, amount, product)

// const initialState = {
//   cart: [],
//   total_items: 0,
//   total_amount: 0,
//   shipping_fee: 300,
// }

// payload: {
//   id, color, amount, product
// }
