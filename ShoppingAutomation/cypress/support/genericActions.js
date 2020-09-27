export class actions {

  click(element){
    cy.get(element)
      .click();
  }

  clearSetText(field, text){
    cy.get(field)
      .clear()
      .type(text)
      .should('have.value', text)
  }

}

export const genericActions = new actions();