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
    // start measure
    console.time('Call to find Nemo took ');
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }
    // end measure
    console.timeEnd('Call to find Nemo took ');
}

findNemo(large);