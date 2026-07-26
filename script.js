const products = [
{
name:"فستان أنيق",
price:"39 €",
image:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600"
},
{
name:"حقيبة نسائية",
price:"45 €",
image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600"
},
{
name:"حذاء رياضي",
price:"69 €",
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
},
{
name:"ساعة يد",
price:"89 €",
image:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600"
},
{
name:"أحمر شفاه",
price:"19 €",
image:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600"
},
{
name:"سماعات لاسلكية",
price:"59 €",
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
},
{
name:"قميص رجالي",
price:"35 €",
image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"
},
{
name:"حقيبة سفر",
price:"95 €",
image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600"
}
];

const container = document.querySelector(".product-grid");

products.forEach(product=>{

container.innerHTML += `
<div class="product">

<img src="${product.image}" alt="${product.name}">

<div class="product-info">

<h3>${product.name}</h3>

<div class="price">${product.price}</div>

<button class="buy">
أضف إلى السلة 🛒
</button>

</div>

</div>
`;

});

document.addEventListener("click",function(e){

if(e.target.classList.contains("buy")){

alert("تمت إضافة المنتج إلى السلة");

}

});
