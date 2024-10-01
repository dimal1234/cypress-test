import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../pageObjects/loginPage";
import products from "../../pageObjects/products";

let LoginPage = new loginPage();
let product = new products();

Given("I login to the web site", () => {
  cy.login(Cypress.env("standardUser"), Cypress.env("password"));
  cy.wait(5000);
  LoginPage.getLogo().should("contain", "Swag Labs");
});

And("I add products to shopping cart", () => {
  product.getLabsBackPack().click();
  product.getBike().click();
  product.getTshirt().click();
  product.getOnesie().click();
});

And("I click on shopping cart", () => {
  product.getShoppingCart().click();
  cy.wait(4000);
  product.getTitle().should("contain", "Your Cart");
});

And("I click on checkout button", () => {
  product.getCheckout().click();
});

And("I fill the information from", () => {
  product.getFirstName().type("John");
  product.getLastName().type("Doe");
  product.getZip().type("12345");
});

And("I click on continue button", () => {
  product.getContinue().click();
});

And("I click on finish button", () => {
  product.getFinish().click();
  cy.wait(3000);
});

Then("I should see the thank you message", () => {
  cy.get('[data-test="complete-header"]').should(
    "contain",
    "Thank you for your order!"
  );
});
