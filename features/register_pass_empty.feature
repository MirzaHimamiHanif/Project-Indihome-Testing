# ./features/register_pass_empty.feature

Feature: Register on the web
    As a user
    I want to be able to register

    Scenario: User can't register if password is empty
        Given User browse Page Dashboard
        And Click button “Daftar Akun
        And fill email field
        And fill Nama field
        And fill Nomor Hp
        And choose jenis kelamin
        And fill Konfirmasi Password field
        When Click saya setuju dengan syarat dan ketentuan
        Then Register button is disabled