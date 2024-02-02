/*
False Positive:

In this example, the code deserializes user data from a JSON string. The deserializeUser function uses JSON.parse to convert the serialized data into a User object.
The false positive might occur if a static code analysis tool flags this as a potential vulnerability without understanding the broader context of the application.
*/


// Suppose this class represents some serialized data structure
class User {
  constructor(public username: string, public isAdmin: boolean) {}
}

// Deserialize user data from an untrusted source (e.g., user input)
function deserializeUser(serializedData: string): User {
  return JSON.parse(serializedData);
}

// Example usage
const userInput = '{"username": "malicious_user", "isAdmin": true}';
const user = deserializeUser(userInput);

// Check if the user is an admin
if (user.isAdmin) {
  console.log('Admin privileges granted!');
}
