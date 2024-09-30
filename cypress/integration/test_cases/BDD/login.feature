Feature: Login functionality

@regression
Scenario: Successfull login
    Given I visit the login page
    When I fill in the User name
    And I fill in the Password
    And I click on the login button
    Then I should see the home page
