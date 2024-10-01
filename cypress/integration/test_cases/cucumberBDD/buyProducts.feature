Feature: Buy some items from the inventory

Scenario: Customer can buy some products successfully
    Given I login to the web site
    And I add products to shopping cart
    And I click on shopping cart
    And I click on checkout button
    And I fill the information from
    And I click on continue button
    And I click on finish button
    Then I should see the thank you message
