import { headerPage } from '../../pageObjects/pageObjects'
import { genericExpectations } from '../../genericExpectations'
import { genericActions } from '../../genericActions'

export class headerPageServices {

  /*
   * Validates if the page is correctly displayed according to the visibility of some of its elements
  */
  isCorrectlyDisplayed(){

    genericExpectations.elementToBeDisplayed(headerPage.logo);
    genericExpectations.elementToBeDisplayed(headerPage.searchInput);
    genericExpectations.elementToBeDisplayed(headerPage.tabs.homepage);
    genericExpectations.elementToBeDisplayed(headerPage.tabs.blog);
    genericExpectations.elementToBeDisplayed(headerPage.tabs.cart);
    genericExpectations.elementToBeDisplayed(headerPage.tabs.checkout);
    genericExpectations.elementToBeDisplayed(headerPage.tabs.account);
    genericExpectations.elementToBeDisplayed(headerPage.tabs.sample);
    genericExpectations.elementToBeDisplayed(headerPage.tabs.shop);
    genericExpectations.elementToBeDisplayed(headerPage.tabs.yoyo);
    genericExpectations.elementToBeDisplayed(headerPage.shoppingCart.container);

  }

  /*
   * Validates if the ammount on the cart icon is according to a specified one
   * @params {int} ammount: Ammount of products
  */
  cartAmmountCorrectlyDisplayed(ammount){
    genericExpectations.elementToContainText(headerPage.shoppingCart.ammount, ammount + " items");
  }

  /*
   * Clicks on the shopping cart icon
  */
  goToShoppingCart(){
    genericActions.click(headerPage.shoppingCart.container);
  }

}

export const headerPagePO = new headerPageServices();