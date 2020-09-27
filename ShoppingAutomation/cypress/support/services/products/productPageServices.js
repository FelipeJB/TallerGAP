import { default as pageServices } from '../pageServices'
import { productPage } from '../../pageObjects/pageObjects'
import { genericExpectations } from '../../genericExpectations'
import { genericActions } from '../../genericActions'

export class productPageServices {

  /*
   * Validates if the page is correctly displayed according to the visibility of some of its elements
  */
  isCorrectlyDisplayed(){

    pageServices.headerPageServices.isCorrectlyDisplayed();
    genericExpectations.elementToBeDisplayed(productPage.productTitle);
    genericExpectations.elementToBeDisplayed(productPage.productPrice);
    genericExpectations.elementToBeDisplayed(productPage.productShortDescription);
    genericExpectations.elementToBeDisplayed(productPage.addToCartAmmount);
    genericExpectations.elementToBeDisplayed(productPage.addToCartButton);
    genericExpectations.elementToBeDisplayed(productPage.productDescriptionSection);
    genericExpectations.elementToBeDisplayed(productPage.relatedProductsSection);

    cy.fixture('appUrls.json').then((urls) => {
      cy.fixture('products.json').then((products) => {
        genericExpectations.urlToContain(urls.productPage + products[0].name);   
      });      
    });

  }

  /*
   * Navigates to the product page according to the product fixture index
   * @params {int} index: Index of the product on fixture to navigate to its page
  */
  navigateToProductPage(index){
    cy.fixture('appUrls.json').then((urls) => {
      cy.fixture('products.json').then((products) => {
        cy.visit(urls.productPage + products[index].name);   
      });      
    });
  }


  /*
   * Sets an ammount of a product to add to cart and validates the ammount displayed
   * @params {int} ammount: Ammount of product to set
  */
  setAddToCartAmmount(ammount){
    genericActions.clearSetText(productPage.addToCartAmmount, ammount);
  }

  /*
   * Adds an ammount of the product to the cart
   * @params {int} ammount: Ammount of product to add
  */
  addProductToCart(ammount){
    this.setAddToCartAmmount(ammount);
    genericActions.click(productPage.addToCartButton);
  }
  
  /*
   * Validates if the added to cart message is displayed correctly
   * @params {int} index: Index of the product on fixture
   * @params {int} ammount: Ammount of product
  */
  addedToCartMessageCorrectlyDisplayed(productIndex, ammount){
    cy.fixture('products.json').then((products) => {
      const message = ammount + ' × “' + products[productIndex].name + '” have been added to your cart.'
      genericExpectations.elementToBeDisplayed(productPage.transactionMessage);
      genericExpectations.elementToContainText(productPage.transactionMessage, message);
    });   
  }

}

export const productPagePO = new productPageServices();