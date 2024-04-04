import { useEffect, useState } from "react";
import { CartItem, addToCart, removeFromCart } from "../store/cart-slice";
import { useCartDispatch, useCartSelector } from "../store/hooks";

export default function CartItems() {
  const { items: cartItems } = useCartSelector((state) => state.cart);
  const cartIsNotEmpty = cartItems.length > 0;
  const dispatch = useCartDispatch();
  const totalPrice = cartItems.reduce(
    (val, item) => val + item.price * item.quantity,
    0
  );

  const [formattedTotalPrice, setFormattedTotalPrice] = useState<string>(
    `$${totalPrice.toFixed(2)}`
  );

  function handleRemoveFromCart(id: string) {
    dispatch(removeFromCart(id));
  }

  function handleAddToCart(item: CartItem) {
    dispatch(addToCart({ id: item.id, title: item.title, price: item.price }));
  }

  useEffect(() => {
    setFormattedTotalPrice(`$${totalPrice.toFixed(2)}`);
  }, [totalPrice]);

  return (
    <div id="cart">
      {!cartIsNotEmpty && <p>No items in cart!</p>}

      {cartIsNotEmpty && (
        <ul id="cart-items">
          {cartItems.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;
            return (
              <li key={item.id}>
                <div>
                  <span>{item.title}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleAddToCart(item)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
