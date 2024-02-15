// function averagePair(Arr, num){
//     if(!Arr.length) return false;
//     let sum = num * 2;
//     let left = 0;
//     let right = Arr.length - 1;
//     while (left < right) {
//         let s = Arr[left] + Arr[right];
//         if(sum === s){
//             return true;
//         } else {
//             if(s > sum) {
//                 right--
//             } else {
//                 left++;
//             } 
//         }
//     }
//     return false;
// }

function averagePair(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
      let avg = (arr[start]+arr[end]) / 2 
      if(avg === num) return true;
      else if(avg < num) start++
      else end--
    }
    return false;
}

console.log("1 => ",averagePair([1,2,3],2.5));
console.log("2 => ",averagePair([1,3,3,5,6,7,10,12,19],8));
console.log("3 => ",averagePair([-1,0,3,4,5,6], 4.1));
console.log("4 => ",averagePair([],4));
