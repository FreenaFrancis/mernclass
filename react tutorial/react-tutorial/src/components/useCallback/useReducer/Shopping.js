import React, { useReducer } from 'react';

const initialState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const updatedCartItems = [...state.cartItems, action.payload];
      return {
        ...state,
        cartItems: updatedCartItems,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + action.payload.price
      };
    case 'REMOVE_ITEM':
      const updatedItems = state.cartItems.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        cartItems: updatedItems,
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - action.payload.price
      };
    case 'CLEAR_CART':
      return initialState;
    default:
      return state;
  }
};

function ShoppingCart() {
  const [cartState, dispatch] = useReducer(reducer, initialState);

  const addItemToCart = item => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItemFromCart = item => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartState.cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeItemFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Items: {cartState.totalItems}</p>
      <p>Total Price: ${cartState.totalPrice}</p>
      <button onClick={clearCart}>Clear Cart</button>
      <button onClick={() => addItemToCart({ id: 1, name: 'Item 1', price: 10 })}>Add Item</button>
    </div>
  );
}

export default ShoppingCart;
