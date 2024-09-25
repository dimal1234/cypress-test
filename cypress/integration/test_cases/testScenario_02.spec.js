import loginPage from "../pageObjects/loginPage";
import products from "../pageObjects/products";

describe("E2E scenario", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("Should be able to buy products successfully", () => {
    cy.login(Cypress.env("standardUser"), Cypress.env("password"));
    cy.wait(5000);

    let LoginPage = new loginPage();
    LoginPage.getLogo().should("contain", "Swag Labs");

    const Product = new products();
    //Select products
    Product.getLabsBackPack().click();
    Product.getBike().click();
    Product.getTshirt().click();
    Product.getOnesie().click();

    //Shopping cart
    Product.getShoppingCart().click();
    cy.wait(4000);
    Product.getTitle().should("contain", "Your Cart");
    Product.getCheckout().click();

    //Checkout information
    Product.getFirstName().type("John");
    Product.getLastName().type("Doe");
    Product.getZip().type("12345");
    Product.getContinue().click();

    //Finish the transaction
    Product.getFinish().click();
    cy.get('[data-test="complete-header"]').should(
      "contain",
      "Thank you for your order!"
    );
  });
});
