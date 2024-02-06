import * as crypto from 'crypto';

class YourClass {
  private m_mgf1_hash: string;
  private m_alg_hash: string;
  private m_private_key: crypto.KeyObject;
  private m_algo_param: crypto.OAEPOptions;
  private m_cipher: crypto.Cipher;

  public testDecrypt(plaintext: Buffer, ciphertext: Buffer): void {
    console.log(
      `Verifying OAEP with mgf1_hash: ${this.m_mgf1_hash} alg_hash: ${this.m_alg_hash} - ${ciphertext.length} bytes ciphertext - ${plaintext.length} bytes plaintext`
    );

    this.m_cipher.init(crypto.constants.DECRYPT, this.m_private_key, this.m_algo_param);
    const java_plaintext = Buffer.concat([this.m_cipher.update(ciphertext), this.m_cipher.final()]);

    // Use crypto.timingSafeEqual for constant-time comparison
    if (!crypto.timingSafeEqual(java_plaintext, plaintext)) {
      throw new Error('Verification failure - plaintext does not match after decryption.');
    }
  }
}
