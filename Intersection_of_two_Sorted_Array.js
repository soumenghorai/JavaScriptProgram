// Find the intersection of two sorted arrays. OR in other words, Given 2 sorted arrays, find all the
// elements which occur in both the arrays.

// Example-1
// Input: A: [1 2 3 3 4 5 6] B: [3 3 5]
// Output: [3 3 5]

function test(a1, a2) {
    let i = 0;
    let j = 0;

    let result = [];

    while(i<a1.length && j<a2.length) {
        if(a1[i] == a2[j]) {
            result.push(a1[i]);
            i++;
            j++;
        } else if(a1[i] > a2[j]) {
            j++;
        } else {
            i++;
        }
    }
    return result;
}
let a1 = [1, 2, 3, 3, 4, 5, 6];
let a2 = [3, 3, 5];
console.log(test(a1,a2));