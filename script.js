
const products = [
    { name: "قميص رجالي", category: "رجالي", price: 2500 },
    { name: "فستان نسائي", category: "نسائي", price: 3200 },
    { name: "تيشيرت أطفال", category: "أطفال", price: 1800 }
];

function filterCategory(cat) {
    const container = document.getElementById('products');
    container.innerHTML = '';
    products.filter(p => p.category === cat).forEach(p => {
        container.innerHTML += `<div class="product-card">
            <h3>${p.name}</h3>
            <p>${p.price} دج</p>
            <button onclick="addToCart('${p.name}', ${p.price})">أضف إلى السلة</button>
        </div>`;
    });
}

function addToCart(name, price) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('تمت الإضافة إلى السلة');
}

function goToCart() {
    alert("ميزة السلة قيد التطوير. سيتم إضافتها لاحقاً.");
}
