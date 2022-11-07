export const scrollHandler = () => {
  const cart = document.getElementById("cart");

  window.onscroll = () => {
    if (window.scrollY >= 160) {
      cart.style.position = "fixed";
    } else {
      cart.style.position = "absolute";
    }
  };
};
