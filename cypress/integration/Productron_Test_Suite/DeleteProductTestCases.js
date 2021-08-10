/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage';

const homePage = new HomePage();

describe('Testing Delete Product', () => {
  it('User is able to successfully delete an existing product', () => {
    cy.visit('http://localhost:3000/');
    homePage.getDeleteButton().click();
    homePage.getDeleteYesButton().click();
    cy.get('.ant-message-notice-content').should(
      'have.text',
      'Product deleted successfully!'
    );
  });
});
