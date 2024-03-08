const isOdd = val => val % 2 !== 0;

// function someRecursive(arr, cb){
//     if(!arr.length) return false;
//     let response = cb(arr[0]);
//     if(response) return response;
//     return someRecursive(arr.slice(1), cb);
// }

function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}

console.log("🚀 ~ someRecursive:", someRecursive([1,2,3,4], isOdd)); // true
console.log("🚀 ~ someRecursive:", someRecursive([4,6,8,9], isOdd)); // true
console.log("🚀 ~ someRecursive:", someRecursive([4,6,8], isOdd)); // false
console.log("🚀 ~ someRecursive:", someRecursive([4,6,8], val => val > 10)); // false