/*
The False Positive Explanation:

A static analysis tool might detect the nested repetition (a+)+ and flag it as potentially vulnerable to ReDoS.
However, in this specific case, the input 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!' is a string of repeated 'a's, and the regex will efficiently match it without significant backtracking.
*/

function validateInput(input: string): boolean {
  // This regular expression is flagged as potentially vulnerable to ReDoS
  const regex = /^(a+)+$/;
  
  return regex.test(input);
}

const userInput = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!';
const result = validateInput(userInput);

console.log(result);
