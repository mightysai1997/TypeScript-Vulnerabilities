var fs = require('fs')
function looseFilePermissionsNoncompliant() {
    // Noncompliant: read permissions assigned to others.
    fs.promises.chmod("/path", 0o774).then(r => {})
}
