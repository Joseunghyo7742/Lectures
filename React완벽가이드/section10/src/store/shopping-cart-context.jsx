import { createContext, useReducer, useState } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products';

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

//자동완성에 도움주기 위함.

function shoppingCartReducer(state, action) {
  switch (action.type) {
    case 'ADDCART':
      const updatedItems = [...state.items];
      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find(
          (product) => product.id === action.id
        );
        updatedItems.push({
          id: action.id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }
      return { items: updatedItems };
    case 'UPDATECART':
      const items = [...state.items];
      const updatedItemIndex = items.findIndex(
        (item) => item.id === action.productId
      );
      const updateItem = {
        ...items[updatedItemIndex],
      };
      updateItem.quantity += action.amount;

      if (updateItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        items[updatedItemIndex] = updateItem;
      }
      return {
        items: items,
      };
    default:
      return state;
  }
}

export default function CartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: 'ADDCART',
      id,
    });
  }
  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: 'UPDATECART',
      productId,
      amount,
    });
  }
  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };
  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
