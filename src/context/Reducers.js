export const cartReducer = (state, action) => {
  switch (action.type) {
    case "addToCart":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }]
      };
    case "removeFromCart":
      return {
        ...state,
        cart: [state.cart.filter(item => item.id !== action.payload.id)]
      };
    default: return state;
  }
}