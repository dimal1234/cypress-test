module.exports = {
  default: {
    require: ["cypress/integration/test_cases/stepDefinitions/*.js"],
    tags: "@regression",
  },
};
