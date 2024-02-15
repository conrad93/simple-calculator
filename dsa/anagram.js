// solution 1
// function validAnagram(str1, str2){
//   if(str1.length !== str2.length) return false;
//   let frequency1 = {};
//   let frequency2 = {};
//   for (let val of str1){
//       frequency1[val] = (frequency1[val] || 0) + 1;
//   }
//   for (let val of str2){
//       frequency2[val] = (frequency2[val] || 0) + 1;
//   }
//   for (let key in frequency1){
//     if(!(key in frequency2)) return false;
//     if(frequency1[key] !== frequency2[key]) return false;
//   }
//   return true;
// }

// solution 2
function validAnagram(str1, str2){
    if(str1.length !== str2.length) return false;
    let lookup = {};
    for (let val of str1){
        lookup[val] = (lookup[val] || 0) + 1;
    }
    for (let val of str2){
        if(!lookup[val]){
            return false;
        } else {
            lookup[val] -= 1;
        }
    }
    return true;
}

console.log("0 => ",validAnagram('', ''));
console.log("1 => ",validAnagram('aaz', 'zza'));
console.log("2 => ",validAnagram('anagram', 'nagaram'));
console.log("3 => ",validAnagram("rat","car"));
console.log("4 => ",validAnagram('awesome', 'awesom'));
console.log("5 => ",validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'));
console.log("6 => ",validAnagram('qwerty', 'qeywrt'));
console.log("7 => ",validAnagram('texttwisttime', 'timetwisttext'));
