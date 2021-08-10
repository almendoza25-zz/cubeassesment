/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage';
import EditProductPopUpPage from '../../support/pageObjects/EditProductPopUpPage';

const homePage = new HomePage();
const editProductPopUpPage = new EditProductPopUpPage();

describe('Testing Create Product', () => {
  it('User is able to successfully edit an existing product', () => {
    cy.visit('http://localhost:3000/');
    homePage.getEditButton().click();
    editProductPopUpPage.getNameTextField().clear();
    editProductPopUpPage.getNameTextField().type('Changed product name');
    editProductPopUpPage.getDescriptionTextField().clear();
    editProductPopUpPage.getDescriptionTextField().type('Change Description');
    editProductPopUpPage.getEditButton().click();

    //Assert Successful change of product name
    cy.get(
      ':nth-child(1) > .ant-card > .ant-card-body > .ant-card-meta > .ant-card-meta-detail > .ant-card-meta-title'
    ).should('have.text', 'Changed product name');
  });
});
