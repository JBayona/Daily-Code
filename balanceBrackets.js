/*

Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string "([)]" or "((()", you should return false.

*/

function balanceBrackets(str) {
  let hash = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  let stack = [];
  let element;
  for(let i = 0; i < str.length; i++) {
    element = str[i];
    if(element in hash) {
      stack.push(element);
    } else {
      if(!stack.length) {
        return false;
      } else {
        let pop = stack.pop();
        if(hash[pop] !== element) {
          return false;
        }
      }
    }
  }
  return stack.length === 0;
}

str = '([])[]({[]})';
// str = '([)]';
// str = '((()';
console.log(balanceBrackets(str));
