import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addDishToCart(dish) {
    try {
      const newCart = [...cart, dish];
      setCart(newCart);
      localStorage.setItem("@food_explorer:cart", JSON.stringify(newCart));
      alert('Prato adicionado ao carrinho!');
    } catch (error) {
      console.error('addDishToCart ~ error:', error);
      alert('Ocorreu um erro ao adicionar prato ao carrinho!');
    }
  }

  function removeDishFromCart(dish) {
    if (window.confirm('Tem certeza que deseja remover este prato do carrinho?')) {
      try {
        const newCart = cart.filter((item) => item.id !== dish.id);
        setCart(newCart);
        localStorage.setItem("@food_explorer:cart", JSON.stringify(newCart));
        alert('Prato removido do carrinho!');
      } catch (error) {
        console.error('removeDishFromCart ~ error:', error);
        alert('Ocorreu um erro ao remover prato do carrinho!');
      }
    }
  }

  function clearCart() {
    try {
      setCart([]);
      localStorage.removeItem("@food_explorer:cart");
    } catch (error) {
      console.error('clearCart ~ error:', error);
    }
  }

  useEffect(() => {
    const localCart = localStorage.getItem("@food_explorer:cart");
    if (localCart && cart.length === 0) {
      setCart(JSON.parse(localCart));
    }
  }, [])

  return (
    <CartContext.Provider value={{
      cart,
      addDishToCart,
      removeDishFromCart,
      clearCart,
    }}>
      {children}
    </CartContext.Provider>
  )
}

function useCart() {
  const context = useContext(CartContext);
  return context;
}

export {
  CartProvider,
  useCart,
}