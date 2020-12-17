# ./features/availability_invalid.feature

Feature: Check availability on the web
    As a user
    I want to be able to check availability

    Scenario: User success to check if service is unavailable on the website
        Given user browse check availability page 1
        And user can change location 1
        When user click cek ketersediaan 1
        Then user know the service is unavailable 1
