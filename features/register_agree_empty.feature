# ./features/register_pass_empty.feature

Feature: Register on the web
    As a user
    I want to be able to register

    Scenario: There is a notification that the field check must be checked 
        Given User browse Page Dashboard
        And Click button “Daftar Akun
        And fill email field
        And fill Nama field
        And fill Nomor Hp
        And choose jenis kelamin
        And fill Password field
        And fill Konfirmasi Password field
        When Click button “Register”
        Then User can see alert message 4