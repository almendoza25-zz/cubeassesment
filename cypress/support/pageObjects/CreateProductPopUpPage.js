class CreateProductPopUpPage {
  getNameTextField() {
    return cy.get('#name');
  }

  getDescriptionTextField() {
    return cy.get('#description');
  }

  getImageURLTextField() {
    return cy.get('#imgUrl');
  }

  getPriceTextField() {
    return cy.get('#price');
  }

  getInventoryTextField() {
    return cy.get('#inventory');
  }

  getCreateButton() {
    return cy.get('.ant-btn-primary');
  }

  getCancelButton() {
    return cy.get('.ant-modal-footer > :nth-child(1)');
  }
}

export default CreateProductPopUpPage;
