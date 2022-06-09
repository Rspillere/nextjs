import { useState } from 'react';

const inicialState = {
  cart: [],
};

const useInicialState = () => {
  const [state, setState] = useState(inicialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id != payload.id),
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
  };
};

export default useInicialState;
