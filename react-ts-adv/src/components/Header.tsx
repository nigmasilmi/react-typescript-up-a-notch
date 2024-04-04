import { useState } from "react";

import Cart from "./Cart.tsx";
import { useCartSelector } from "../store/hooks.ts";

import Logo from "../assets/logo.png";

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const cartQty = useCartSelector((state) =>
    state.cart.items.reduce((val, item) => val + item.quantity, 0)
  );

  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header id="main-header">
        <div id="main-title">
          <img src={Logo} alt="Elegant model" />
          <h1>Elegant Redux</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQty})</button>
        </p>
      </header>
    </>
  );
}
