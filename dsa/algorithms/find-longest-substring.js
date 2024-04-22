// function findLongestSubstring(str){
//     let start = 0;
//     let end = 0;
//     let longestSubstring = 0;
//     let obj = {};
//     while(start <= end && end < str.length){
//         if(obj[str[end]]){
//             obj = {};
//             start++;
//             end = start;
//         } else {
//             obj[str[end]] = 1;
//             end++;
//         }
//         longestSubstring = Math.max(longestSubstring, end - start);
//     }
//     return longestSubstring;
// }

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
}

console.log("1 => ", findLongestSubstring('')); // 0
console.log("2 => ", findLongestSubstring('rithmschool')); // 7
console.log("3 => ", findLongestSubstring('thisisawesome')); // 6
console.log("4 => ", findLongestSubstring('thecatinthehat')); // 7
console.log("5 => ", findLongestSubstring('bbbbbb')); // 1
console.log("6 => ", findLongestSubstring('longestsubstring')); // 8
console.log("7 => ", findLongestSubstring('thisishowwedoit')); // 6