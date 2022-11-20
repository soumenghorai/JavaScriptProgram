/*
Permutations Recursively 
Here we will be discussing about String permutation problem i.e., Calculating the possible permutations of a string.
• Problem statement: 
• Generate all permutations of a String
• Input: ABC
• Output: ABC, ACB, BAC, CAB, BCA, CBA
*/

function permutation(result, arr, bag, map) {
    if(bag.length == arr.length) {
        result.push(bag.join(""));
        return;
    }
    for(let i = 0; i<arr.length; i++) {
        if(!map[i]) {
            bag.push(arr[i]);
            map[i] = true;
            permutation(result, arr, bag, map);
            bag.pop();
            map[i] = false;
        }
    }
    return result;
}


let str = "abc";
permutation([], str.split(""), [], {});
console.log(permutation([], str.split(""), [], {}));

// function permute(str, l, r)
// {
// if(l === r)
// console.log(str+"<br>");
// else {
// for(let i=1; i <= r; i++)
// {
// str = swap (str, l, i);
// permute(str, l+1, r);
// str = swap(str,l,i);
// }
// }
// }
// function swap(a,i,j)
// {
// let temp;
// let charArray = a.split("");
// temp = charArray[i];
// charArray[i] = charArray[j];
// charArray[j] = temp;
// return (charArray).join("");
// }
// let str = "ABC";
// let n = str.length;
// permute(str, 0, n-1)


