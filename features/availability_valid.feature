# ./features/availability_valid.feature

Feature: Check availability on the web
    As a user
    I want to be able to check availability

    Scenario: User success to check if service is available on the website
        Given user browse check availability page
        And user can change location
        When user click cek ketersediaan
        Then user know the service is available