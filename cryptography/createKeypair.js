const crypto = require('crypto');
const fs = require('fs');

/**
 * Generates an RSA key pair and saves the public and private keys to files.
 */
function generateRsaKeyPair() {
  // Configure key pair generation parameters
  const keyPairOptions = {
    modulusLength: 4096, // Bits - standard for RSA keys
    publicKeyEncoding: {
      type: 'pkcs1', // Public Key Cryptography Standards 1
      format: 'pem', // Most common formatting choice
    },
    privateKeyEncoding: {
      type: 'pkcs1', // Public Key Cryptography Standards 1
      format: 'pem', // Most common formatting choice
    },
  };

  // Generate the RSA key pair
  const keyPair = crypto.generateKeyPairSync('rsa', keyPairOptions);

  // Save the public key to a file
  const publicKeyFilePath = __dirname + '/id_rsa_pub.pem';
  fs.writeFileSync(publicKeyFilePath, keyPair.publicKey);
  console.log(`Public key saved to: ${publicKeyFilePath}`);

  // Save the private key to a file
  const privateKeyFilePath = __dirname + '/id_rsa_priv.pem';
  fs.writeFileSync(privateKeyFilePath, keyPair.privateKey);
  console.log(`Private key saved to: ${privateKeyFilePath}`);
}

// Generates the RSA key pair and saves to files
generateRsaKeyPair();
