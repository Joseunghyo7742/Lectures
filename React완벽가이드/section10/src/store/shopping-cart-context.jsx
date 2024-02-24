import { createContext } from 'react';

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

//자동완성에 도움주기 위함.
