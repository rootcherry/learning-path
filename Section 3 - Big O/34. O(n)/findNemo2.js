const nemo = ['nemo'];
const everyone = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank'
];
const large = new Array(1000000).fill('nemo');

function findNemo (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }
}

findNemo(large); // O(n) -> Linear Time 

// Compress boxes example
// These are JavaScript versions to showcase other ways of doing FOR LOOPS

// ES5
function compressAllBoxes(boxes) {
    boxes.forEach(function(item){
        console.log(item);
    });
}

// ES6
const compressAllBoxes = boxes => {
    boxes.forEach(box => console.log(box));
}