var express = require('express')
var app = express()

function timingAttackNoncompliant() {
    app.get('/user/login', function (req, res) {
        // Noncompliant: '===' operator is used with sensitive data field.
        if(password === "myPass") {
            logIn()
        }
    })
}
