import { mount } from "cart/CartApp";
import React, { useRef, useEffect } from "react";

const CartApp = () => {
  const stringThingyAgain = "";
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} />;
};

export default CartApp;
