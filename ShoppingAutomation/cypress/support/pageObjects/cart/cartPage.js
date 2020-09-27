module.exports = {
  products : {
    container : '.woocommerce-cart-form',
    names : 'td.product-name',
    unitPrices : 'td.product-price',
    quantities : 'td.product-quantity input',
    totals : 'td.product-subtotal'
  },
  cartTotals : {
    container : '.cart_totals',
    subtotal : '[data-title="Subtotal"]',
    shipping : '[data-title="Shipping"]',
    total : '[data-title="Total"]'
  },
  proceedToCheckoutButton : '.checkout-button'
}