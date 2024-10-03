## **Showcase with Cypress**

This project leverages Cypress for end-to-end testing to ensure that web application behaves as expected. I have automated the testing process and integrate it with GitHub Actions for continuous integration (CI). Cypress provides a powerful testing framework that is easy to set up and use, with great debugging and reporting features. 
Website used: [Sauce Demo Site](https://www.saucedemo.com/ "Sauce Demo Site")

## Prerequisites

- Node.js (v14 or higher)
- NPM (v6 or higher)
- Jenkins (optional for advanced CI/CD setup)
- Cucumber.js for BDD testing

## Installation

First, ensure that you have the required dependencies by running the following 
command: `npm install`

This will install all project dependencies as listed in *package.json*

## Environment Variables

All relevant environment variables are stored in *cypress.config.js*

## Running Tests

You can run the tests in two ways. Choose the one that suits your workflow:

##### Interactive Mode
To run Cypress in interactive mode and view the test execution in the Cypress Test Runner, use the following 
command:`npm run cy:open`

##### Headless Mode
To run Cypress tests in headless mode, which is suitable for automated testing and CI/CD pipelines, use the following 
command:`npm run cy:run`

##### Run all feature files
`npm run Feature:run`

## BDD Process with Cucumber and Gherkin

I have followed a Behavior-Driven Development (BDD) approach to ensure my code meets the specified behavior. Using Cucumber, I created test scenarios in Gherkin syntax, allowing both technical and non-technical stakeholders to understand the tests.

## Continuous Integration with GitHub Actions

I have used GitHub Actions to automate CI pipeline, ensuring that every push or pull request triggers a build and runs the test suite. 

## GitHub Actions Workflow

My CI workflow is defined in the *.github/workflows/cypress-tests.yml* file. This workflow automatically installs dependencies, runs tests, and ensures that the build is passing. This will run Cypress tests in a headless mode each time a commit is pushed to the main branch or when a pull request is created.

## Jenkins Workflow

I have implemented a Jenkins CI/CD (additional) workflow that is triggered automatically whenever a commit is pushed to the GitHub repository. The workflow integrates GitHub and Jenkins using a webhook, so each new commit initiates a Jenkins build process. Additionally, I utilized ngrok to host Jenkins temporarily, allowing it to be accessible externally for integration with GitHub, facilitating seamless communication between the two services.

## Conclusion

This project utilizes Cypress for powerful end-to-end testing, integrated with GitHub Actions for continuous integration. Cypress is further enhanced by using Cucumber and Gherkin for writing BDD test cases, ensuring application is well-tested and meets the required behaviors.


