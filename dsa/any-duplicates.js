// function areThereDuplicates(...args) {
//     let temp = {};
//     for (const i of args) {
//         temp[i] = temp[i] ? temp[i] += 1 : temp[i] = 1;
//         if(temp[i] > 1) return true;
//     }
//     return false;
// }

// function areThereDuplicates() {
//     let collection = {}
//     for(let val in arguments){
//       collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//     }
//     for(let key in collection){
//       if(collection[key] > 1) return true
//     }
//     return false;
// }

// function areThereDuplicates(...args) {
//     // Two pointers
//     if (typeof args[0] === "string") {
//         args.sort()
//     } else {
//         args.sort((a, b) => a - b)
//     }
//     let start = 0;
//     let next = 1;
//     while(next < args.length){
//       if(args[start] === args[next]){
//           return true
//       }
//       start++
//       next++
//     }
//     return false
// }

function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}  

console.log("1 => ", areThereDuplicates(1, 2, 3)); // false
console.log("2 => ", areThereDuplicates(1, 2, 2)); // true 
console.log("3 => ", areThereDuplicates('a', 'b', 'c', 'a')); // true