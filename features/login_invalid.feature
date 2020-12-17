# ./features/login_invalid.feature

Feature: Login on the web
    As a user
    I want to be able to login

    Scenario: User failed to login on the website
        Given user browse dashboard page 1
        And user click button masuk 1
        And user fill email or phone number field 1
        When user click login 1
        Then user can see notification that account is not registered
