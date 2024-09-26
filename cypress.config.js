const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    homeUrl: "https://www.saucedemo.com/",
    //common password
    password: "secret_sauce",

    //Standard user login
    standardUser: "standard_user",

    //locked out user
    lockedOutUser: "locked_out_user",

    //problem user
    problemUser: "problem_user",

    //invalid username, password
    invalid: "test_user",
    invalidPassword: "test_password",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/test_cases/",
    pageLoadTimeout: 100000,
  },
});
