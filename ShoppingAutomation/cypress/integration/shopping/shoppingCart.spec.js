import { productsApi } from "../../support/api/apis"
import { productPageServices } from "../../support/services/pageServices"

//Cypress.on('uncaught:exception', (err, runable) => {
//  return false;
//});

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
    cy.fixture('appUrls.json').then((urls) => {
      cy.fixture('products.json').then((products) => {
        cy.visit(urls.productPage + products[0].name);   
      });      
    });
    
    productPageServices.isCorrectlyDisplayed();
  })

  it('Product ammount displaying updated number', () => {
    
  })

  it('Product correctly added to cart', () => {
    
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