const base64url = require('base64url');
const crypto = require('crypto');
const signatureFunction = crypto.createSign('RSA-SHA256');

// // Example JWT (JSON Web Token)
// const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

// // Split the JWT into its three parts: header, payload, and signature
// const [header, payload, signature] = JWT.split('.');

// // Decode each part using base64url decoding
// const decodedHeader = base64url.decode(header);
// const decodedPayload = base64url.decode(payload);
// const decodedSignature = base64url.decode(signature);

// // Log the decoded values
// console.log("Decoded Header:", decodedHeader);
// console.log("Decoded Payload:", decodedPayload);
// console.log("Decoded Signature:", decodedSignature);


const header =  {
     alg : 'RS256',
     typ : 'JWT'
}

const payLoad = {
     syb : '123',
     name : "Somin",
     admin : true, 
     iat : 213342134213
}

const base64urlHeader = base64(JSON.stringify(header));
const base64urlPayload = base64(JSON.stringify(payLoad));

