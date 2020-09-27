import { productPage } from '../../pageObjects/pageObjects'
import { genericExpectations } from '../../genericExpectations'

export class productPageServices {

  /*
   * Validates if the page is correctly diaplayed according to the visibility of some of its elements
  */
  isCorrectlyDisplayed(){

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

}

export const productPagePO = new productPageServices();