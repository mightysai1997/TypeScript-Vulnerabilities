import * as crypto from 'crypto';

function generateRsaKeyPair(): crypto.KeyPairSyncResult<string | Buffer | crypto.KeyObject> {
  // Use a key size of 2048 bits for RSA
  const keyPair = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
    },
  });

  return keyPair;
}

// Example usage
const rsaKeyPair = generateRsaKeyPair();
console.log('Public Key:\n', rsaKeyPair.publicKey);
console.log('Private Key:\n', rsaKeyPair.privateKey);
