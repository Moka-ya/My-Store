
const products = [
  { name: "هاتف ذكي", price: 30000 },
  { name: "مكنسة كهربائية", price: 18000 },
  { name: "كرة قدم", price: 2500 },
  { name: "ساعة يد", price: 3500 },
];

const shippingCosts = {
  "أدرار": 1000, "الشلف": 1100, "الأغواط": 1200, "أم البواقي": 1300, "باتنة": 1400,
  "بجاية": 1500, "بسكرة": 1600, "بشار": 1700, "البليدة": 1800, "البويرة": 1900,
  "تمنراست": 2000, "تبسة": 2100, "تلمسان": 2200, "تيارت": 2300, "تيزي وزو": 2400,
  "الجزائر": 2500, "الجلفة": 2600, "جيجل": 2700, "سطيف": 2800, "سعيدة": 2900,
  "سكيكدة": 3000, "سيدي بلعباس": 3100, "عنابة": 3200, "قالمة": 3300, "قسنطينة": 3400,
  "المدية": 3500, "مستغانم": 3600, "المسيلة": 3700, "معسكر": 3800, "ورقلة": 3900,
  "وهران": 4000, "البيض": 4100, "إليزي": 4200, "برج بوعريريج": 4300, "بومرداس": 4400,
  "الطارف": 4500, "تندوف": 4600, "تيسمسيلت": 4700, "الوادي": 4800, "خنشلة": 4900,
  "سوق أهراس": 5000, "تيبازة": 5100, "ميلة": 5200, "عين الدفلى": 5300, "النعامة": 5400,
  "عين تموشنت": 5500, "غرداية": 5600, "غليزان": 5700
};

let cart = [];

window.onload = () => {
  const productSection = document.getElementById("products");
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h3>${p.name}</h3><p>${p.price} دج</p><button onclick='addToCart(${JSON.stringify(p)})'>أضف</button>`;
    productSection.appendChild(div);
  });

  const wilayaSelect = document.getElementById("wilaya");
  Object.keys(shippingCosts).forEach(w => {
    const opt = document.createElement("option");
    opt.value = w;
    opt.textContent = w;
    wilayaSelect.appendChild(opt);
  });
};

function addToCart(product) {
  cart.push(product);
  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById("cart-items");
  cartDiv.innerHTML = "";
  cart.forEach((item, i) => {
    const p = document.createElement("p");
    p.textContent = `${item.name} - ${item.price} دج`;
    const btn = document.createElement("button");
    btn.textContent = "حذف";
    btn.onclick = () => { cart.splice(i, 1); renderCart(); };
    p.appendChild(btn);
    cartDiv.appendChild(p);
  });
  calculateShipping();
}

function calculateShipping() {
  const wilaya = document.getElementById("wilaya").value;
  const shipping = shippingCosts[wilaya] || 0;
  const total = cart.reduce((sum, item) => sum + item.price, 0) + shipping;
  document.getElementById("shipping").textContent = shipping;
  document.getElementById("total").textContent = total;
}
