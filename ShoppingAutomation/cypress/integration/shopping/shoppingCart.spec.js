import { productsApi } from "../../support/api/apis"
import { productPageServices, headerPageServices, cartPageServices } from "../../support/services/pageServices"

context('Shopping Cart General Checks', () => {
  before(() => {
    cy.fixture('products.json').then((products) => {
      productsApi.productExistsByName(products[0].name);
      cy.get('@productExists').then((productExists) => {
        if(!productExists){
          productsApi.createProduct(products[0]);
        }
      });
    });
  })

  it('Product page correctly displayed', () => {
    productPageServices.navigateToProductPage(0);    
    productPageServices.isCorrectlyDisplayed();
  })

  it('Product ammount displaying updated number', () => {
    productPageServices.navigateToProductPage(0);    
    productPageServices.setAddToCartAmmount(7);   
  })

  it('Product correctly added to cart', () => {
    productPageServices.navigateToProductPage(0);
    productPageServices.addProductToCart(7);
    productPageServices.addedToCartMessageCorrectlyDisplayed(0, 7);
    headerPageServices.cartAmmountCorrectlyDisplayed(7);
    headerPageServices.goToShoppingCart();
    cartPageServices.isCorrectlyDisplayedNotEmpty();
    cartPageServices.isCorrectlyDisplayedNotEmpty();
    cartPageServices.isProductOnCart(0, 7);
  })

  after(() => {
    cy.fixture('products.json').then((products) => {
      productsApi.productExistsByName(products[0].name);
      cy.get('@productExists').then((productExists) => {
        if(productExists){
          productsApi.getProductByName(products[0].name);
          cy.get('@product').then((product) => {
            productsApi.deleteProduct(product.id);
          });
        }
      });
    });
  })

});