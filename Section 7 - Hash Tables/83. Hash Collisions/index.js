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
