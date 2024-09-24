const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: "https://www.saucedemo.com/",
    //common password
    password: "secret_sauce",

    //Standard user login
    standardUser: "standard_user",

    //invalid username
    invalid: "test_user",

    //invalid password
    invalidPassword: "test_password",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/test_cases/",
  },
});
