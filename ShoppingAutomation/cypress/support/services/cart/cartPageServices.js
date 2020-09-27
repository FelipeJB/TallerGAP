import { default as pageServices } from '../pageServices'
import { cartPage } from '../../pageObjects/pageObjects'
import { genericExpectations } from '../../genericExpectations'

export class cartPageServices {

  /*
   * Validates if the page is correctly displayed when the cart is not empty
  */
  isCorrectlyDisplayedNotEmpty(){

    pageServices.headerPageServices.isCorrectlyDisplayed();
    genericExpectations.elementToBeDisplayed(cartPage.products.container);
    genericExpectations.elementToBeDisplayed(cartPage.cartTotals.subtotal);
    genericExpectations.elementToBeDisplayed(cartPage.cartTotals.shipping);
    genericExpectations.elementToBeDisplayed(cartPage.cartTotals.total);
    genericExpectations.elementToBeDisplayed(cartPage.proceedToCheckoutButton);
    
    cy.fixture('appUrls.json').then((urls) => {
      genericExpectations.urlToContain(urls.cartPage);     
    });

  }

  /*
   * Validates if the last product added to cart is displayed correctly
   * @params {int} index: Index of the product on fixture
   * @params {int} ammount: Ammount of product
  */
  isProductOnCart(productIndex, ammount){
    cy.fixture('products.json').then((products) => {
      genericExpectations.elementOfArrayToContainText(cartPage.products.names, 0, products[productIndex].name);
      genericExpectations.elementOfArrayToContainValue(cartPage.products.quantities, 0, ammount);
      cy.get(cartPage.products.unitPrices)
        .eq(0)
        .invoke('text')
        .then((unitPrice) => {
          const totalPrice = Math.round((ammount * parseFloat(unitPrice.trim().substring(1))) * 100) / 100;
          genericExpectations.elementOfArrayToContainText(cartPage.products.totals, 0, totalPrice);
        })
    });   
  }

}

export const cartPagePO = new cartPageServices();