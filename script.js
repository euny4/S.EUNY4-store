const products = [
{
id:1,
name:"فستان أنيق",
category:"نساء",
price:"39 €",
image:"https://picsum.photos/400/500?random=1"
},
{
id:2,
name:"حقيبة جلد",
category:"حقائب",
price:"55 €",
image:"https://picsum.photos/400/500?random=2"
},
{
id:3,
name:"حذاء رياضي",
category:"أحذية",
price:"79 €",
image:"https://picsum.photos/400/500?random=3"
},
{
id:4,
name:"ساعة يد",
category:"إكسسوارات",
price:"120 €",
image:"https://picsum.photos/400/500?random=4"
},
{
id:5,
name:"قميص رجالي",
category:"رجال",
price:"35 €",
image:"https://picsum.photos/400/500?random=5"
},
{
id:6,
name:"فستان أطفال",
category:"أطفال",
price:"25 €",
image:"https://picsum.photos/400/500?random=6"
},
{
id:7,
name:"أحمر شفاه",
category:"تجميل",
price:"18 €",
image:"https://picsum.photos/400/500?random=7"
},
{
id:8,
name:"سماعات لاسلكية",
category:"إلكترونيات",
price:"65 €",
image:"https://picsum.photos/400/500?random=8"
}
];

const container = document.getElementById("productsContainer");

if(container){

products.forEach(product=>{

container.innerHTML += `
<div class="product">

<img src="${product.image}" alt="${product.name}">

<div class="product-info">

<h3>${product.name}</h3>

<p>${product.category}</p>

<div class="price">${product.price}</div>

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

    alert(product.name + " تمت إضافته إلى السلة");
}
