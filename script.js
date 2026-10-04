const STORAGE_KEYS = {
  cart: "seuny4_cart",
  wishlist: "seuny4_wishlist",
  user: "seuny4_user"
};

function getCart() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.cart) || "[]");
}

function setCart(cart) {
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
}

function getWishlist() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.wishlist) || "[]");
}

function setWishlist(wishlist) {
  localStorage.setItem(STORAGE_KEYS.wishlist, JSON.stringify(wishlist));
}

function formatPrice(value) {
  return Number(value).toLocaleString("en-US") + " €";
}

function updateCartCount() {
  const countEl = document.getElementById("cart-count");
  if (!countEl) return;

  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + Number(item.quantity || 1), 0);
  countEl.textContent = totalItems;
}

function addToCart(product) {
  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  setCart(cart);
  updateCartCount();
  alert(`${product.name} تمت إضافته إلى السلة`);
}

function changeCartQuantity(productId, delta) {
  const cart = getCart();
  const item = cart.find(item => item.id === productId);

  if (!item) return;

  item.quantity += delta;

  if (item.quantity <= 0) {
    const filtered = cart.filter(item => item.id !== productId);
    setCart(filtered);
  } else {
    setCart(cart);
  }

  updateCartCount();
  renderCartPage();
}

function removeFromCart(productId) {
  const cart = getCart().filter(item => item.id !== productId);
  setCart(cart);
  updateCartCount();
  renderCartPage();
}

function toggleWishlist(productId) {
  const wishlist = getWishlist();
  const exists = wishlist.some(item => item.id === productId);

  if (exists) {
    const updated = wishlist.filter(item => item.id !== productId);
    setWishlist(updated);
  } else {
    const product = getProductById(productId);
    if (product) {
      wishlist.push(product);
      setWishlist(wishlist);
    }
  }

  updateWishlistButtons();
  renderWishlistPage();
}

function getProductById(productId) {
  return (window.products || []).find(item => item.id === Number(productId));
}

function isInWishlist(productId) {
  return getWishlist().some(item => item.id === productId);
}

function updateWishlistButtons() {
  document.querySelectorAll(".favorite-btn").forEach(button => {
    const productId = Number(button.dataset.id);
    const active = isInWishlist(productId);
    button.classList.toggle("active", active);
    button.innerHTML = active ? "♥" : "♡";
  });
}

function renderProductsGrid(containerSelector, filterCategory = null, limit = null) {
  const container = document.querySelector(containerSelector);
  if (!container || !window.products) return;

  let productsToRender = [...window.products];

  if (filterCategory) {
    productsToRender = productsToRender.filter(item => item.category === filterCategory);
  }

  if (limit) {
    productsToRender = productsToRender.slice(0, limit);
  }

  container.innerHTML = productsToRender.map(product => `
    <div class="product-card">
      <div class="product-image">
        <button class="favorite-btn ${isInWishlist(product.id) ? "active" : ""}" data-id="${product.id}" aria-label="إضافة للمفضلة">
          ${isInWishlist(product.id) ? "♥" : "♡"}
        </button>
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-body">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <div class="product-meta">
          <div class="product-price">${formatPrice(product.price)}</div>
          <div class="product-rating">⭐ ${product.rating}</div>
        </div>
        <div class="product-actions">
          <button class="btn btn-primary" onclick="addToCart(${JSON.stringify(product)})">أضف للسلة</button>
          <a href="product.html?id=${product.id}" class="btn btn-secondary">تفاصيل</a>
        </div>
      </div>
    </div>
  `).join("");

  document.querySelectorAll(".favorite-btn").forEach(button => {
    button.addEventListener("click", function () {
      toggleWishlist(Number(this.dataset.id));
    });
  });
}

function renderCartPage() {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalEl = document.getElementById("total-price");
  if (!cartItemsContainer || !totalEl) return;

  const cart = getCart();

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-state">
        <h2>سلة المشتريات فارغة</h2>
        <p>ابدأ بالتسوق الآن</p>
        <a href="products.html" class="primary-btn" style="margin-top: 16px;">تسوق الآن</a>
      </div>
    `;
    totalEl.textContent = "0 €";
    return;
  }

  let subtotal = 0;

  cartItemsContainer.innerHTML = cart.map(item => {
    const itemTotal = Number(item.price) * Number(item.quantity || 1);
    subtotal += itemTotal;

    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-info">
          <h3>${item.name}</h3>
          <div class="cart-meta">
            <span>${item.category}</span>
            <span>${formatPrice(item.price)}</span>
          </div>
        </div>

        <div class="quantity-controls">
          <button onclick="changeCartQuantity(${item.id}, -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="changeCartQuantity(${item.id}, 1)">+</button>
        </div>

        <div class="cart-price">${formatPrice(itemTotal)}</div>
        <button class="remove-btn" onclick="removeFromCart(${item.id})">حذف</button>
      </div>
    `;
  }).join("");

  totalEl.textContent = formatPrice(subtotal);
}

function renderWishlistPage() {
  const container = document.getElementById("wishlist-items");
  if (!container) return;

  const wishlist = getWishlist();

  if (wishlist.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <h2>قائمة المفضلة فارغة</h2>
        <p>أضف بعض المنتجات إلى المفضلة الآن</p>
        <a href="products.html" class="primary-btn" style="margin-top: 16px;">تصفح المنتجات</a>
      </div>
    `;
    return;
  }

  container.innerHTML = wishlist.map(product => `
    <div class="product-card">
      <div class="product-image">
        <button class="favorite-btn active" data-id="${product.id}" aria-label="إزالة من المفضلة">♥</button>
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-body">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <div class="product-meta">
          <div class="product-price">${formatPrice(product.price)}</div>
          <div class="product-rating">⭐ ${product.rating}</div>
        </div>
        <div class="product-actions">
          <button class="btn btn-primary" onclick="addToCart(${JSON.stringify(product)})">أضف للسلة</button>
          <a href="product.html?id=${product.id}" class="btn btn-secondary">تفاصيل</a>
        </div>
      </div>
    </div>
  `).join("");

  document.querySelectorAll(".favorite-btn").forEach(button => {
    button.addEventListener("click", function () {
      toggleWishlist(Number(this.dataset.id));
    });
  });
}

function renderProductDetailPage() {
  const detailContainer = document.getElementById("product-detail");
  if (!detailContainer) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const product = getProductById(productId);

  if (!product) {
    detailContainer.innerHTML = `
      <div class="empty-state">
        <h2>المنتج غير موجود</h2>
        <a href="products.html" class="primary-btn" style="margin-top: 16px;">عودة للمنتجات</a>
      </div>
    `;
    return;
  }

  detailContainer.innerHTML = `
    <div class="product-detail">
      <div class="detail-image">
        <img src="${product.image}" alt="${product.name}">
      </div>

      <div class="detail-info">
        <span class="product-category">${product.category}</span>
        <h1>${product.name}</h1>
        <div class="detail-price">${formatPrice(product.price)}</div>
        <div class="product-rating">⭐ ${product.rating} تقييم</div>

        <p class="detail-desc">${product.description}</p>

        <ul class="detail-list">
          <li>اللون: ${product.colors.join(" / ")}</li>
          <li>التوصيل: خلال 2 إلى 4 أيام</li>
          <li>الدفع: نقداً أو بطاقة</li>
          <li>الضمان: سنة</li>
        </ul>

        <div class="color-options">
          ${product.colors.map(color => `<span class="color-box">${color}</span>`).join("")}
        </div>

        <div class="product-actions">
          <button class="btn btn-primary" onclick="addToCart(${JSON.stringify(product)})">أضف إلى السلة</button>
          <button class="btn btn-secondary" onclick="toggleWishlist(${product.id})">
            ${isInWishlist(product.id) ? "إزالة من المفضلة" : "أضف إلى المفضلة"}
          </button>
        </div>
      </div>
    </div>
  `;
}

function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) return;

  searchInput.addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();

    if (window.location.pathname.includes("products.html") || window.location.pathname.includes("index.html")) {
      const container = document.getElementById("productsContainer");
      if (!container) return;

      const filtered = window.products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );

      container.innerHTML = filtered.map(product => `
        <div class="product-card">
          <div class="product-image">
            <button class="favorite-btn ${isInWishlist(product.id) ? "active" : ""}" data-id="${product.id}">
              ${isInWishlist(product.id) ? "♥" : "♡"}
            </button>
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="product-body">
            <span class="product-category">${product.category}</span>
            <h3>${product.name}</h3>
            <div class="product-meta">
              <div class="product-price">${formatPrice(product.price)}</div>
              <div class="product-rating">⭐ ${product.rating}</div>
            </div>
            <div class="product-actions">
              <button class="btn btn-primary" onclick="addToCart(${JSON.stringify(product)})">أضف للسلة</button>
              <a href="product.html?id=${product.id}" class="btn btn-secondary">تفاصيل</a>
            </div>
          </div>
        </div>
      `).join("");

      document.querySelectorAll(".favorite-btn").forEach(button => {
        button.addEventListener("click", function () {
          toggleWishlist(Number(this.dataset.id));
        });
      });
    }
  });
}

function handleLogin() {
  const form = document.getElementById("login-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      alert("يرجى تعبئة جميع الحقول");
      return;
    }

    localStorage.setItem(STORAGE_KEYS.user, JSON.stringify({
      email,
      loggedIn: true
    }));

    alert("تم تسجيل الدخول بنجاح");
    window.location.href = "index.html";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  updateCartCount();

  const currentPage = document.body.dataset.page;

  if (currentPage === "home") {
    renderProductsGrid("#productsContainer", null, 8);
  }

  if (currentPage === "products") {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    renderProductsGrid("#productsContainer", category || null, null);
  }

  if (currentPage === "cart") {
    renderCartPage();
  }

  if (currentPage === "wishlist") {
    renderWishlistPage();
  }

  if (currentPage === "product") {
    renderProductDetailPage();
  }

  if (currentPage === "login") {
    handleLogin();
  }

  setupSearch();
  updateWishlistButtons();
});
