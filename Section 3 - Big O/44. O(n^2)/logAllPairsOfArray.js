// Log all pairs of array

const boxes = ['1', '2', '3', '4', '5'];

// my solution
for (i = 0; i < boxes.length; i++) {
    const arr = [];
    for (j = 0; j < boxes.length; j++) {
        arr.push(boxes[i], boxes[j]);
    }
    console.log(arr.join(','));   
}
