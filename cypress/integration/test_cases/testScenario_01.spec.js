import loginPage from "../pageObjects/loginPage";

describe("Login Function", () => {
  beforeEach("Login Page", () => {
    cy.visit(Cypress.env("homeUrl"));
  });

  let LoginPage = new loginPage();

  it("Successfull Login", () => {
    LoginPage.getUserNameField().type(Cypress.env("standardUser"));
    LoginPage.getPasswordField().type(Cypress.env("password"));
    LoginPage.getLoginButton().click();
    LoginPage.getLogo().should("contain", "Swag Labs");
  });

  it("User Name issue", () => {
    LoginPage.getUserNameField().type(Cypress.env("invalid"));
    LoginPage.getPasswordField().type(Cypress.env("password"));
    LoginPage.getLoginButton().click();
    LoginPage.getError().should(
      "contain",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Password issue", () => {
    LoginPage.getUserNameField().type(Cypress.env("standardUser"));
    LoginPage.getPasswordField().type(Cypress.env("invalidPassword"));
    LoginPage.getLoginButton().click();
    LoginPage.getError().should(
      "contain",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Locked out User behavior", () => {
    LoginPage.getUserNameField().type(Cypress.env("lockedOutUser"));
    LoginPage.getPasswordField().type(Cypress.env("password"));
    LoginPage.getLockedUser().should(
      "contain",
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
