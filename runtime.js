const perf = require("execution-time")();

function doublerAppend(nums) {
    let new_nums = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 2;
        new_nums.push(num);
    }
}

function doublerInsert(nums) {
    let new_nums = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }
}

function getSizedArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(i);
    }
    return array;
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

// How long does it take to double every number in a given
// array?

// Try it with first function
perf.start(); // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop(); // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();

console.log("Results for the tinyArray");
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

// Results for the extraLargeArray
// insert 1.2073229 s
// append 3.6165 ms

// Results for the largeArray
// insert 8.7856 ms
// append 606.2 μs

// Results for the mediumArray
// insert 186.6 μs
// append 215.6 μs

// Results for the smallArray
// insert 48.3 μs
// append 107.4 μs

// Results for the tinyArray
// insert 41.6 μs
// append 99.4 μs

// Reading over the results its easy to see that the pattern shows that the smaller array passes into both the insert and the append faster than the larger arrays. This means that the tiny array is the fastest and it gets slower the bigger the array. The interesting this about this is the jump in speed after medium array, the large array inserts in ms insead of μs and even stranger still is that the extra large array jumped all the way up to 1.20 s which by comparison is super slow. Thus the tiny array scales the best and the extra large scales the worst... Now I have a question for you Jeddy and don't look this up I'm just curious if you know this song by its lyrics.
// "We are building a religion
// We are building it bigger
// We are widening the corridors
// And adding more lanes
// We are building a religion
// A limited edition
// We are now accepting callers
// For these pendant key chains
// To resist it is useless
// It is useless to resist it
// His cigarette is burning
// But he never seems to ash
// He is grooming his poodle
// He is living comfort eagle
// You can meet at his location
// But you'd better come with cash"
