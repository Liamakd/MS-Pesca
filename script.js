let cartCount = 0;

document.addEventListener("DOMContentLoaded", () => {
  const cartButton = document.getElementById("cart-button");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      cartCount++;
      cartButton.textContent = `Carrito (${cartCount})`;
      alert(`${button.getAttribute("data-name")} ha sido agregado al carrito.`);
    });
  });
});
