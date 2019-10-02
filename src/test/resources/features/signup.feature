@signupfeature
Feature: User SignUp
  This feature deals with the User SignUp form functionality of the application

  Background: 
    Given User navigates to SignUp form page

  @signuphappyflow
  Scenario Outline: Validate whether user is able to sign up form drop with prefered email
    When User fills sign up form fields "<emailaddress>" "<password>" "<postcode>" "<marketoption>"
    And User click the submit button
    Then User navigates to account dashboard page
    When User logout from application by clicking on logout button  

    Examples: 
      | emailaddress   		   | password | postcode | marketoption |
      | fdtest5@gmail.com | test@123 | W1A 0AX  | No thanks    |

  @signupnegativeflow
  Scenario Outline: Validate error messages when user tries to sing up without data in mandatory fields
    When User fills sign up form fields "<emailaddress>" "<password>" "<postcode>" "<marketoption>"
    And User click the submit button
    Then User validates error messages of manadatory fields "<emailaddress>" "<password>" "<postcode>" "<marketoption>"

    Examples: 
      | emailaddress | password | postcode | marketoption |
      |              |          |          | No thanks    |

  @signupfieldformates
  Scenario Outline: Field level error validations for signup form
    When User fills sign up form fields "<emailaddress>" "<password>" "<postcode>" "<marketoption>"
    And User click the submit button
    Then User validates accepted format messages that display for each sign up field

    Examples: 
      | emailaddress   | password | postcode | marketoption |
      | test@gmail.com | test@123 | W1A 0AX  | No thanks    |

  @signupfieldslabel
  Scenario: Validate label of sign up form fields
    When User validates sign up form field labels
