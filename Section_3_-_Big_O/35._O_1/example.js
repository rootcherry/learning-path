function compressFirstBox(boxes) {
    console.log(boxes[0]);
}

// O(1) - Constant Time

const boxes = ['0', '1', '2', '3', '4', '5'];

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // O(2)

// INPUTS CAN BEM ANY TYPE OF DATA. NOT JUST ARRAYS
