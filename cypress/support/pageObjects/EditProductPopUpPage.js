class EditProductPopUpPage {
  getNameTextField() {
    return cy.get('#name');
  }

  getDescriptionTextField() {
    return cy.get('#description');
  }

  getImageUrlTextField() {
    return cy.get('#imgUrl');
  }

  getPriceTextField() {
    return cy.get('#price');
  }

  getInventoryTextField() {
    return cy.get('#inventory');
  }

  getEditButton() {
    return cy.get('.ant-btn-primary');
  }
}

export default EditProductPopUpPage;
