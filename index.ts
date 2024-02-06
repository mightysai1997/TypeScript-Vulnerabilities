function cryptographicKeyGeneratorNoncompliant()
{
    var crypto = require("crypto")
    var object = {
        // Noncompliant: 'modulusLength' is less than 2048 bits.
        modulusLength: 1024,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
            cipher: 'aes-256-cbc',
            passphrase: 'top secret'
        }
    }
    var { publicKey, privateKey} = crypto.generateKeyPairSync('rsa',object)
}
