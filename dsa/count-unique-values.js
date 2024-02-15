// function countUniqueValues(arr){
//   let left = 0; 
//   let right = 1;
//   let newArr = [];
//   for(let i= 0; i < arr.length; i++){
//     if(arr[left] !== arr[right]){
//       newArr.push(arr[left]);
//       left = right;
//     }
//     right++;
//   }
//   return newArr.length;
// }

function countUniqueValues(arr){
  if(arr.length === 0) return 0;
  let i = 0;
  for(let j= 1; j < arr.length; j++){
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log("1 => ",countUniqueValues([1,1,1,1,1,2]));
console.log("2 => ",countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log("3 => ",countUniqueValues([]));
console.log("4 => ",countUniqueValues([-2,-1,-1,0,1]));