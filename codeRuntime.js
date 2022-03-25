console.time("Execution Time");
let array = [28, 43, -12, 30, 4, 0, 12];

let value = "False";
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (i !== j) {
            if (array[i] + array[j] === 0) {
                value = "True";
            }
        }
    }
}

console.log(value);
console.timeEnd("Execution Time");
// Execution Time: 5.337ms
// O(n^2)
console.time("Execution Time");
function hasUniqueChars(word) {
    let uniqueChars = new Set([]);
    for (let i = 0; i < word.length; i++) {
        uniqueChars.add(word[i]);
    }
    return uniqueChars.size === word.length;
}
console.timeEnd("Execution Time");
// Execution Time: 0.005ms
// O(1)
console.time("Execution Time");
function pangrams(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");

    for (let i = 0; i < alphabet.length; i++) {
        if (lowercase.indexOf(alphabet[i]) === -1) {
            return "not pangram";
        }
    }

    return "pangram";
}
console.timeEnd("Execution Time");
// Execution Time: 0.003ms
// O(n)
console.time("Execution Time");
function findLongestWord(str) {
    var longestWord = str.split(" ").sort(function (a, b) {
        return b.length - a.length;
    });
    return longestWord[0].length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
console.timeEnd("Execution Time");
// Execution Time: 0.108ms
// O(1)
