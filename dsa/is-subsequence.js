// function isSubsequence(str1, str2) {
//     let first = 0, second = 0;
//     while(first < str1.length && second < str2.length){
//         if(str1[first] === str2[second]){
//             first++;
//         }
//         second++;
//     }
//     return first === str1.length;
// }

// function isSubsequence(str1, str2) {
//     var i = 0;
//     var j = 0;
//     if (!str1) return true;
//     while (j < str2.length) {
//       if (str2[j] === str1[i]) i++;
//       if (i === str1.length) return true;
//       j++;
//     }
//     return false;
// }

function isSubsequence(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
}

console.log("1 => ",isSubsequence('hello', 'hello world'));
console.log("2 => ",isSubsequence('sing', 'sting'));
console.log("3 => ",isSubsequence('abc', 'abracadabra'));
console.log("4 => ",isSubsequence('abc', 'acb'));