function mergeObjects(obj1: any, obj2: any) {
    return { ...obj1, ...obj2 }; // Vulnerable
}

const userInput = { __proto__: { isAdmin: true } };
const userData = { name: 'Alice' };
const mergedData = mergeObjects(userData, userInput);

console.log(mergedData.isAdmin); // true (potentially compromised)
