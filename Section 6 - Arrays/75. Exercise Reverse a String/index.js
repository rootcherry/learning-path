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

//reverse(str);

// Andrei solution
function reverse2(str) {
  // check input
  if (!str || str.length < 2 || typeof str != "string") {
    return;
    ("hmm that's not good");
  }

  const backwards = [];
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  console.log(backwards);

  return backwards.join("");
}

function reverse3(str) {
  return str.split("").reverse().join("");
}

const reverse4 = (str) => str.split("").reverse().join("");

const reverse5 = (str) => [...str].reverse().join("");

console.log(reverse2("Hi My name is Andrei"));
console.log(reverse3(" ,olleH"));
console.log(reverse4("dlroW"));
console.log(reverse5("👩‍💻 !!!"));
