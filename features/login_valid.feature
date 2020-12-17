# ./features/login_valid.feature

Feature: Login on the web
    As a user
    I want to be able to login

    Scenario: User success to login on the website
        Given user browse dashboard page
        And user click button masuk
        And user fill email or phone number field
        When user click login
        Then user can see pop up to verify OTP
