class HomePage {
  getCreateProductButton() {
    return cy.get('.ant-menu');
  }

  getEditButton() {
    return cy.get(
      ':nth-child(1) > .ant-card > .ant-card-actions > :nth-child(1) > :nth-child(1) > .anticon'
    );
  }

  getDeleteButton() {
    return cy.get(
      ':nth-child(1) > .ant-card > .ant-card-actions > :nth-child(2) > :nth-child(1) > .anticon'
    );
  }

  getDeleteYesButton() {
    return cy.get('.ant-btn-primary');
  }
}

export default HomePage;
