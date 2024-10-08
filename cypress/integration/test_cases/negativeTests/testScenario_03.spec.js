import loginPage from "../../pageObjects/loginPage";

describe("Different user profile behaviors", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit(Cypress.env("homeUrl"));
    cy.wait(3000);
  });

  let LoginPage = new loginPage();

  it("Problem user behavior - negative test (should fail)", () => {
    LoginPage.getUserNameField().type(Cypress.env("problemUser"));
    LoginPage.getPasswordField().type(Cypress.env("password"));
    LoginPage.getLoginButton().click();
    cy.wait(3000);

    //aliasing
    cy.get(
      '[data-test="item-4-title-link"] > [data-test="inventory-item-name"]'
    ).as("frontText");

    cy.get("@frontText")
      .should("be.visible")
      .invoke("text")
      .as("frontTextValue");
    cy.get("@frontText").click();
    cy.wait(3000);

    cy.get('[data-test="inventory-item-name"]')
      .invoke("text")
      .as("productTextValue");

    //compare given images are same

    cy.get("@frontTextValue").then((frontTextValue) => {
      cy.get("@productTextValue").then((productTextValue) => {
        expect(frontTextValue).to.equal(productTextValue);
      });
    });
  });
});
