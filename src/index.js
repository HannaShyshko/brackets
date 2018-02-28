module.exports = function check(str, bracketsConfig) {
  // your solution

   var stack = [];
   
    for (i = 0; i < str.length; i++) {

        const match = bracketsConfig.find(b => b.includes(str[i]));

        if(str[i] == match[1] && match[0] == stack[stack.length - 1]) {
          stack.pop()
          } else { 
          stack.push(str[i]);
        }
    }
    return !stack.length; 
} 