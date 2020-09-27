import { productsApi } from "../../support/api/apis"

//Cypress.on('uncaught:exception', (err, runable) => {
//  return false;
//});

context('Shopping Cart', () => {
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

  it('Adding product to shopping cart', () => {
    cy.visit("/")
    cy.log('test')
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