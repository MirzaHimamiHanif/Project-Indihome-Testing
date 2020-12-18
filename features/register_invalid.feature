# ./features/register_invalid.feature

Feature: Register on the web
    As a user
    I want to be able to register

    Scenario: The user has failed to register because account has been registered
        Given User browse Page Dashboard 1
        And Click button “Daftar Akun 1
        And fill email field 1
        And fill Nama field 1
        And fill Nomor Hp 1
        And choose jenis kelamin 1
        And fill Password field 1
        And fill Konfirmasi Password field 1
        And Click saya setuju dengan syarat dan ketentuan 1
        When Click button “Register” 1
        Then user can see alert message