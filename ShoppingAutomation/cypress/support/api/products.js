export class productsBackend {

  /*
   * Creates a non existent product in the app
   * @params {Object} product: js product object 
  */
  createProduct(product){
    cy.fixture('apiCredentials.json').then((credentials) => {
      cy.fixture('apiUrls.json').then((apiUrls) => {
        cy.request({
          method : 'POST',
          url : apiUrls.getProduct,
          auth : {
            username : credentials.username,
            password : credentials.password
          },
          body : product
        }).its('status')
          .should('eq', 201);
      });
    });
  }  

  /*
   * Deletes an existent product in the app
   * @params {int} productId: ID of the product to delete
  */
  deleteProduct(productId){
    cy.fixture('apiCredentials.json').then((credentials) => {
      cy.fixture('apiUrls.json').then((apiUrls) => {
        cy.request({
          method : 'DELETE',
          url : apiUrls.getProduct + '/' + productId,
          auth : {
            username : credentials.username,
            password : credentials.password
          },
        }).its('status')
          .should('eq', 200);
      });
    });
  }
  
  /*
   * Requests the respective product page to evaluate if product exists
   * @params {string} productName: Name of the product to verify
   * Stores the product object with the alias 'product'
  */
  getProductByName(productName){
    cy.fixture('apiCredentials.json').then((credentials) => {
      cy.fixture('apiUrls.json').then((apiUrls) => {
        cy.request({
            method : 'GET',
            url : apiUrls.getProduct + '?search=' + productName,
            auth : {
              username : credentials.username,
              password : credentials.password
            },
          }).then((response) => {
              cy.wrap(response.body[0]).as('product');
            })
      });
    });
  }

  /*
   * Requests the respective product page to evaluate if product exists
   * @params {string} productName: Name of the product to verify
   * Stores the boolean productExists with true value if the product exists
  */
  productExistsByName(productName){
    cy.fixture('apiUrls.json').then((apiUrls) => {
      cy.request({
          url : apiUrls.getProductByName + productName,
          failOnStatusCode : false
        })
        .its('status')
        .then((status) => {
          const productExists = status == 404 ? false : true;
          cy.wrap(productExists).as('productExists');
        })
    });
  }

}

export const productsApi = new productsBackend();