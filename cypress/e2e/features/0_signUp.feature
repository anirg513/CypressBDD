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
    Then I click on the signout button
    Then user is signed out

    Examples:
      | first_name | last_name | email | password | confirm_password |
      | John       | Doe       | test21@test.com  | HelloWorld@123| HelloWorld@123 |

  Scenario Outline: Login with created user
    Given I am on the Main page
    When I click on Sign In link
    When I type in my email id "<email>"
    When I type in my password generated "<password>"
    When I click on the sign in button
    Then I should be on the home page

    Examples:
      | email | password |
      | test21@test.com  | HelloWorld@123 |