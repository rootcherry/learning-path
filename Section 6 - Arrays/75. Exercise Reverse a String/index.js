// Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'

let str = "Hi My name is Andrei";
let output = [];

function reverse(str) {
  for (let i = 0; i <= str.length; i++) {
    output.push(str[str.length - i]);
  }
  console.log(output.join(""));
}

reverse(str);
