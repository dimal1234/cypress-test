class loginPage {
  getUserNameField() {
    return cy.get("#user-name");
  }

  getPasswordField() {
    return cy.get("#password");
  }

  getLoginButton() {
    return cy.get("#login-button");
  }

  getLogo() {
    return cy.get(".app_logo");
  }

  getError() {
    return cy.get('h3[data-test="error"]');
  }
}
export default loginPage;
