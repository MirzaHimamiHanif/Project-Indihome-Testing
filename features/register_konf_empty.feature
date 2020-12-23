# ./features/register_pass_empty.feature

Feature: Register on the web
    As a user
    I want to be able to register

    Scenario: There is a notification that the field password confirmation cannot be empty
        Given User browse Page Dashboard
        And Click button “Daftar Akun
        And fill email field
        And fill Nama field
        And fill Nomor Hp
        And choose jenis kelamin
        And fill Password field
        When Click saya setuju dengan syarat dan ketentuan
        Then User can see alert message 3