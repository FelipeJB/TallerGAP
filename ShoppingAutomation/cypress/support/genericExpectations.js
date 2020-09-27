export class expectations {

  elementToBeDisplayed(element){
    cy.get(element).should('be.visible');
  }

  urlToContain(text){
    cy.url().should('include', text);
  }

}

export const genericExpectations = new expectations();