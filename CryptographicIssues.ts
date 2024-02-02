// This example uses a fictional cryptography library for simplicity.

// Insecure key generation function
function generateKey(): string {
  // In a real-world scenario, you would use a secure random number generator.
  return 'insecure_key';
}

// Insecure communication function using a symmetric key
function encryptMessage(message: string, key: string): string {
  // In a real-world scenario, you would use a secure encryption algorithm.
  return `Encrypted: ${message} with key ${key}`;
}

function decryptMessage(encryptedMessage: string, key: string): string {
  // In a real-world scenario, you would use a secure decryption algorithm.
  return encryptedMessage.replace(`Encrypted: `, '');
}

// Example usage
const secretMessage = 'This is a secret message';

// Insecure key generation
const insecureKey = generateKey();

// Insecure communication using the generated key
const encrypted = encryptMessage(secretMessage, insecureKey);
console.log('Encrypted:', encrypted);

// Attacker gains access to the insecure key
const compromisedKey = insecureKey;

// Attacker decrypts the message using the compromised key
const decrypted = decryptMessage(encrypted, compromisedKey);
console.log('Decrypted:', decrypted);
