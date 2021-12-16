import { createContext, useReducer, useContext } from 'react';
import { datatype, commerce, random } from 'faker';
import { cartReducer } from './Reducers';
import faker from 'faker';

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {

  const products = [...Array(20)].map(() => ({
    id: datatype.uuid(),
    name: commerce.productName(),
    price: commerce.price(),
    image: random.image(),
    inStock: random.arrayElement([0, 3, 5, 6, 7]),
    instantDelivery: datatype.boolean(),
    rating: random.arrayElement([1, 2, 3, 4, 5])
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: []
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
