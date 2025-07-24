let user = {
  age: 54,
  name: "Kylie",
  magic: true,
  scream: function () {
    console.log("ahhhhhh!");
  },
};

user.age; // O(1)
user.spell = "abra kadabra"; // O(1)

// console.log(user);
console.log(user.scream()); // O(1)

/*
Objects only save keys as a string

Maps allows other types as keys
Maps maintain insertions in order

*/
// ES6 Maps and Sets
const a = new Map();

// Set stores the keys no values
const b = new Set();
