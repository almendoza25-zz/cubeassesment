/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage';
import CreateProductPopUpPage from '../../support/pageObjects/CreateProductPopUpPage';

const homePage = new HomePage();
const createProductPopUpPage = new CreateProductPopUpPage();

describe('Testing Create Product', () => {
  it('User is able to successfully create a new product', () => {
    cy.visit('http://localhost:3000/');
    homePage.getCreateProductButton().click();
    createProductPopUpPage.getNameTextField().type('Successful Create Product');
    createProductPopUpPage
      .getDescriptionTextField()
      .type('New Product Description');
    createProductPopUpPage
      .getImageURLTextField()
      .type(
        'https://images.unsplash.com/photo-1584466769623-4671db483b1a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=400'
      );
    createProductPopUpPage.getPriceTextField().type('40.00');
    createProductPopUpPage.getInventoryTextField().type('5');
    createProductPopUpPage.getCreateButton().click();

    // Assert if successful popup  is displayed
    cy.get('.ant-message-custom-content > :nth-child(2)').should(
      'have.text',
      'Created Successful Create Product successfully!'
    );
  });

  it('User is unable to create a new product', () => {
    cy.visit('http://localhost:3000/');
    homePage.getCreateProductButton().click();
    createProductPopUpPage.getCreateButton().click();

    // Assert that No Product popup us displayed
    cy.get('.ant-message-notice-content').should('have.text', 'No product');
  });
});
