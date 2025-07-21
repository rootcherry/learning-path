// Log all pairs of array

const boxes = ['1', '2', '3', '4', '5'];

// my solution
for (i = 0; i < boxes.length; i++) {
    const arr = [];
    for (j = 0; j < boxes.length; j++) {
        arr.push(boxes[i], boxes[j]);
    }
    //console.log(arr.join(','));   
}

// andrei solution
const boxes2 = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j]);
        }
    }
}

// logAllPairsOfArray(boxes2);

// ES5
function logAllPairsOfArray2(array) {
    boxes2.forEach(function(firstBox) {
        boxes2.forEach(function(secondBox) {
            console.log(firstBox, secondBox);
        })
    })
}

logAllPairsOfArray2(boxes2);
// O(n * n) -> O(n^2)
// O(n2) - Quadratic Time