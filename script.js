
const wilayaSelect = document.getElementById('wilaya');
const shippingDisplay = document.getElementById('shipping');
const totalDisplay = document.getElementById('total');
const subtotalDisplay = document.getElementById('subtotal');
const shippingPrices = {
  'Blida': 500, 'Aïn Defla': 800, 'Alger': 800, 'Bouira': 800, 'Boumerdès': 800,
  'Médéa': 800, 'Tipaza': 800, 'Aïn Témouchent': 950, 'Annaba': 950, 'Batna': 950,
  'Béjaïa': 950, 'Bordj Bou Arreridj': 950, 'Chlef': 950, 'Constantine': 950, 'El Tarf': 950,
  'Guelma': 950, 'Jijel': 950, 'Khenchela': 950, 'Mascara': 950, 'Mila': 950,
  'Mostaganem': 950, 'M\'sila': 950, 'Oran': 950, 'Oum El Bouaghi': 950, 'Relizane': 950,
  'Saïda': 950, 'Sétif': 950, 'Sidi Bel Abbès': 950, 'Skikda': 950, 'Souk Ahras': 950,
  'Tiaret': 950, 'Tissemsilt': 950, 'Tizi Ouzou': 950, 'Tlemcen': 950,
  'Biskra': 1100, 'Djelfa': 1100, 'El Bayadh': 1100, 'El Oued': 1100, 'Ghardaïa': 1100,
  'Laghouat': 1100, 'Tébessa': 1100, 'Ouargla': 1100,
  'Adrar': 1450, 'Béchar': 1450, 'Naâma': 1450, 'Tamanrasset': 1450,
  'Tindouf': 1650, 'Illizi': 1850
};
const translations = {
  'ar': {
    'checkout': 'إتمام الشراء', 'selectWilaya': 'اختر الولاية', 'delivery': 'رسوم التوصيل',
    'total': 'المجموع الكلي', 'cod': 'الدفع عند التوصيل'
  },
  'fr': {
    'checkout': 'Valider la commande', 'selectWilaya': 'Choisir la wilaya', 'delivery': 'Frais de livraison',
    'total': 'Total', 'cod': 'Paiement à la livraison'
  },
  'en': {
    'checkout': 'Checkout', 'selectWilaya': 'Select Wilaya', 'delivery': 'Shipping Cost',
    'total': 'Total', 'cod': 'Cash on Delivery'
  }
};
const langSelect = document.getElementById('lang');
Object.keys(shippingPrices).forEach(w => {
  const option = document.createElement('option');
  option.value = w;
  option.textContent = w;
  wilayaSelect.appendChild(option);
});
let subtotal = 3000;
wilayaSelect.addEventListener('change', () => {
  const wilaya = wilayaSelect.value;
  const shipping = shippingPrices[wilaya] || 0;
  shippingDisplay.textContent = shipping;
  totalDisplay.textContent = subtotal + shipping;
});
langSelect.addEventListener('change', () => {
  const lang = langSelect.value;
  document.getElementById('label-checkout').textContent = translations[lang]['checkout'];
  document.getElementById('label-select-wilaya').textContent = translations[lang]['selectWilaya'];
  document.getElementById('label-delivery').textContent = translations[lang]['delivery'];
  document.getElementById('label-total').textContent = translations[lang]['total'];
  document.getElementById('label-cod').textContent = translations[lang]['cod'];
});
