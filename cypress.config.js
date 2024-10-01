const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

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

    //error user
    visualUser: "visual_user",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on("file:preprocessor", cucumber());
    },
    specPattern: "cypress/integration/test_cases/",
    //specPattern: "cypress/integration/test_cases/**/*.feature",
    pageLoadTimeout: 100000,
  },
});
