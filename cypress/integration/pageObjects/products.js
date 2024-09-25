class products {
  getLabsBackPack() {
    return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
  }
  getBike() {
    return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]');
  }
  getTshirt() {
    return cy.get(
      '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'
    );
  }
  getOnesie() {
    return cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
  }

  getShoppingCart() {
    return cy.get('[data-test="shopping-cart-link"]');
  }

  getTitle() {
    return cy.get('[data-test="title"]');
  }

  getCheckout() {
    return cy.get('[data-test="checkout"]');
  }

  getFirstName() {
    return cy.get('[data-test="firstName"]');
  }
  getLastName() {
    return cy.get('[data-test="lastName"]');
  }
  getZip() {
    return cy.get('[data-test="postalCode"]');
  }
  getContinue() {
    return cy.get('[data-test="continue"]');
  }

  getFinish() {
    return cy.get('[data-test="finish"]');
  }
}

export default products;
