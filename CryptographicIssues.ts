import * as crypto from 'crypto';

function insecureComparison(secretValue: string, userInput: string): boolean {
  const secretHash = crypto.createHash('sha256').update(secretValue).digest('hex');
  const userInputHash = crypto.createHash('sha256').update(userInput).digest('hex');

  // Vulnerable comparison using array equality
  return secretHash === userInputHash;
}
