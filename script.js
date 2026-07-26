const container = document.getElementById("productsContainer");

if (container) {
    products.forEach(product => {
        container.innerHTML += `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.category}</p>
                <div class="price">${product.price} €</div>
                <button class="buy" onclick='addToCart(${JSON.stringify(product)})'>
                    أضف إلى السلة 🛒
                </button>
            </div>
        </div>
        `;
    });
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product){
    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(product.name + " تمت إضافته إلى السلة");

}
function updateCartCount() {
    const count = document.getElementById("cart-count");
    if (count) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        count.textContent = cart.length;
    }
}

updateCartCount();
