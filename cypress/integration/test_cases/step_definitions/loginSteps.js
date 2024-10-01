import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../pageObjects/loginPage";

let LoginPage = new loginPage();

Given("I visit the login page", () => {
  cy.visit(Cypress.env("homeUrl"));
});

When("I fill in the User name", () => {
  LoginPage.getUserNameField().type(Cypress.env("standardUser"));
});

And("I fill in the Password", () => {
  LoginPage.getPasswordField().type(Cypress.env("password"));
});

And("I click on the login button", () => {
  LoginPage.getLoginButton().click();
});

Then("I should see the home page", () => {
  LoginPage.getLogo().should("contain", "Swag Labs");
});
