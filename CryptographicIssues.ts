// This function takes user input and merges it with an object
function mergeUserData(obj: any, userData: any) {
  // **Vulnerable:** Directly merges user data without validation
  Object.assign(obj, userData);
}

// Example usage
const user = {
  name: "John",
};

const userInput = {
  isAdmin: true, // Malicious user input
  __proto__: {
    toString() {
      // Attacker code to steal cookies
      return document.cookie;
    },
  },
};

mergeUserData(user, userInput);

// Now, calling user.toString() will execute the attacker's code!
console.log(user.toString()); // Steals cookies if executed
