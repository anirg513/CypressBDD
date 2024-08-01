Feature: Signup

  Scenario Outline: Signup with new user details
    Given I am on the Main page
    When I click on Create an Account link
    Then I should be on the sign up page
    When I type in my first name "<first_name>"
    When I type in my last name "<last_name>"
    When I type in my email "<email>"
    When I type in my password "<password>"
    When I type in my password again "<confirm_password>"
    When I click on the sign up button
    Then I should be on the home page
    When I click on the arrow
    And I click on the signout button
    Then user is signed out

    Examples:
      | first_name | last_name | email | password | confirm_password |
      | John       | Doe       | test98706@test.com  | HelloWorld@123| HelloWorld@123 |