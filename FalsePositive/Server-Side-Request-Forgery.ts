/*
This code might be flagged by a static analysis tool as potentially susceptible to SSRF because it takes a URL from user input and makes an HTTP request. However, it might be a false positive for several reasons:
Input Validation:
The example doesn't perform explicit input validation on the user-provided URL. In a real-world scenario, proper input validation and sanitization should be performed to ensure that the URL is safe.
Context Awareness:
The tool may not be aware of the broader context in which the code is used. In this case, the code could be part of a system where the user-provided URL is expected to be external and poses no security risk.
Controlled Environment:
The application might be running in a controlled environment, such as a sandbox or container, where external network access is restricted.

*/

import * as http from 'http';

function fetchRemoteData(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Example usage
const userInput = 'http://example.com/data';  // Assume this is user input
fetchRemoteData(userInput)
  .then((result) => console.log(result))
  .catch((error) => console.error('Error:', error.message));
