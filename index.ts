var express = require('express')
var app = express()
function improperRestrictionOfFramesNoncompliant() {
    app.use((req, res) => {
        // Noncompliant: it has broken `X-Frame-Options` header.
        res.setHeader("X-Frame-Options", req.query)
    })
}
