# ./features/register_email_empty.feature

Feature: Register on the web
    As a user
    I want to be able to register

    Scenario: There is a notification that the field name cannot be empty
        Given User browse Page Dashboard
        And Click button “Daftar Akun
        And fill email field
        And fill Nomor Hp
        And choose jenis kelamin
        And fill Password field
        And fill Konfirmasi Password field
        And Click saya setuju dengan syarat dan ketentuan
        When Click button “Register”
        Then User can see alert message 1