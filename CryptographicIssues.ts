// Insecure example for educational purposes only

// Insecure key generation
function generateInsecureKey(): string {
  // In a real-world scenario, you would use a secure random number generator.
  return 'insecure_key';
}

// Insecure encryption using a weak algorithm
function insecureEncrypt(message: string, key: string): string {
  // In a real-world scenario, you would use a secure encryption algorithm.
  return `Insecurely Encrypted: ${message} with key ${key}`;
}

// Insecure decryption using the same weak algorithm
function insecureDecrypt(encryptedMessage: string, key: string): string {
  // In a real-world scenario, you would use a secure decryption algorithm.
  return encryptedMessage.replace('Insecurely Encrypted: ', '');
}

// Example usage
const secretMessage = 'This is a secret message';

// Insecure key generation
const insecureKey = generateInsecureKey();

// Insecure communication using the generated key
const insecureEncrypted = insecureEncrypt(secretMessage, insecureKey);
console.log('Insecurely Encrypted:', insecureEncrypted);

// Attacker gains access to the insecure key
const compromisedKey = insecureKey;

// Attacker decrypts the message using the compromised key
const insecureDecrypted = insecureDecrypt(insecureEncrypted, compromisedKey);
console.log('Insecurely Decrypted:', insecureDecrypted);
