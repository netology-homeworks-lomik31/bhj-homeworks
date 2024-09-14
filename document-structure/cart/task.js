let cart = {};

let products = document.querySelectorAll(".product");


products.forEach((product) => {
    product.querySelector(".product__quantity-control.product__quantity-control_dec").addEventListener("click", () => {
        let quantity = product.querySelector(".product__quantity-value");
        if (quantity.textContent > 1) {
            quantity.textContent--;
        }
    });
    product.querySelector(".product__quantity-control.product__quantity-control_inc").addEventListener("click", () => {
        let quantity = product.querySelector(".product__quantity-value");
        quantity.textContent++;
    });
    product.querySelector(".product__add").addEventListener("click", () => {
        let id = product.dataset.id;
        let quantity = +product.querySelector(".product__quantity-value").textContent;
        let image = product.querySelector(".product__image").src;
        addItemToCart(id, quantity, image);
    });
});



function addItemToCart(id, quantity, image) {
    if (cart[id]) {
        cart[id].quantity += quantity;
    } else {
        cart[id] = { quantity, image };
    }
    displayCart();
}

function displayCart() {
    let cartProducts = document.querySelector(".cart__products");
    cartProducts.innerHTML = "";
    for (let id in cart) {
        let product = document.createElement("div");
        product.classList.add("cart__product");
        product.dataset.id = id;
        product.innerHTML = `
            <img class="cart__product-image" src="${cart[id].image}">
            <div class="cart__product-count">${cart[id].quantity}</div>
        `;
        cartProducts.appendChild(product);
    }
}
