import loginPage from "../../pageObjects/loginPage";

describe("Check CSS", () => {
  beforeEach("Login Page", () => {
    cy.visit(Cypress.env("homeUrl"));
  });

  let LoginPage = new loginPage();

  it("Should display cart icon in correct place -- fail test", () => {
    LoginPage.getUserNameField().type(Cypress.env("visualUser"));
    LoginPage.getPasswordField().type(Cypress.env("password"));
    LoginPage.getLoginButton().click();
    LoginPage.getLogo().should("contain", "Swag Labs");
    cy.wait(2500);

    //check cart styling postions
    cy.get('[data-test="shopping-cart-link"]')
      .should("be.visible")
      .should("have.css", "position", "absolute")
      .should("have.css", "top", "10px")
      .should("have.css", "right", "20px");
  });
});
