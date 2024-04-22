// function flatten(arr){
//     let response = [];
//     for (const elemant of arr) {
//         if(Array.isArray(elemant)){
//             response.push(...flatten(elemant));
//         } else {
//             response.push(elemant);
//         }
//     }
//     return response;
// }

function flatten(oldArr){
    var newArr = []
    for(var i = 0; i < oldArr.length; i++){
        if(Array.isArray(oldArr[i])){
            newArr = newArr.concat(flatten(oldArr[i]))
        } else {
            newArr.push(oldArr[i])
        }
    } 
    return newArr;
}  

console.log("🚀 ~ flatten:", flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log("🚀 ~ flatten:", flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log("🚀 ~ flatten:", flatten([[1],[2],[3]])); // [1,2,3]
console.log("🚀 ~ flatten:", flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]