export class expectations {

  elementToBeDisplayed(element){
    cy.get(element)
      .should('be.visible');
  }

  elementToContainText(element, text){
    cy.get(element)
      .should('contain.text', text);
  }

  urlToContain(text){
    cy.url()
      .should('include', text);
  }

  elementOfArrayToContainText(element, index, text){
    cy.get(element)
      .eq(index)
      .should('contain.text', text);
  }

  elementOfArrayToContainValue(element, index, value){
    cy.get(element)
      .eq(index)
      .should('contain.value', value);
  }

}

export const genericExpectations = new expectations();