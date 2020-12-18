# ./features/register_valid.feature

Feature: Register on the web
    As a user
    I want to be able to register

    Scenario: The user has successfully entered all data in the register column and the verification code popup is sent via SMS
        Given User browse Page Dashboard
        And Click button “Daftar Akun
        And fill email field
        And fill Nama field
        And fill Nomor Hp
        And choose jenis kelamin
        And fill Password field
        And fill Konfirmasi Password field
        And Click saya setuju dengan syarat dan ketentuan
        When Click button “Register”
        Then user can see popup Kode Verifikasi