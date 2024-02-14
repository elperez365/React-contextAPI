import { createContext, useReducer } from "react";
import shoppingCartReducer from "../reducers/shoppingCartReducer";

export const CartContext = createContext({
  items: [],
  addItemToCart: (item) => {},
  updateItemQuantity: (productId, amount) => {},
});

export default function CartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    { items: [] }
  );

  function handleAddItemToCart(id) {
    shoppingCartDispatch({ type: "ADD_ITEM", payload: { id: id } });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: "UPDATE_QUANTITY",
      payload: { id: productId, amount: amount },
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
