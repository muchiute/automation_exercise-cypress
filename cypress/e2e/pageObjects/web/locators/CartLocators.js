export const CartLocators = {
  // Carrinho / Checkout
  produtoNome: ".cart_description h4",
  produtoPreco: ".cart_price p",
  quantidade: ".cart_quantity button",
  subtotal: ".cart_total_price",
  proceedToCheckout: "Proceed To Checkout",
  placeOrder: "Place Order",

  // Pagamento
  cardName: '[data-qa="name-on-card"]',
  cardNumber: '[data-qa="card-number"]',
  cvc: '[data-qa="cvc"]',
  expiryMonth: '[data-qa="expiry-month"]',
  expiryYear: '[data-qa="expiry-year"]',

  payButton: '[data-qa="pay-button"]',

  orderPlaced: "Order Placed!"
};