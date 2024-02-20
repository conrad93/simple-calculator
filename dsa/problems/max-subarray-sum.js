// function maxSubarraySum(nums,len){
//     let i = 0;
//     let maxSum = null;
//     let sum = null;
//     let j = 0;
//     while(i < nums.length - len + 1){
//         if(i === j){
//             j++;
//         }
//         if(i + 1 === j){
//             sum += nums[i] + nums[j];
//         } else {
//             sum += nums[j];
//         }
//         if(j === i + len - 1){
//             i++;
//             j = i;
//             if(sum > maxSum) maxSum = sum;
//             sum = null;
//         } else {
//             j++;
//         }
//     }
//     return maxSum;
// }

function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}

console.log("1 => ",maxSubarraySum([100,200,300,400], 2)); // 700
console.log("2 => ",maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));  // 39 
console.log("3 => ",maxSubarraySum([-3,4,0,-2,6,-1], 2)); // 5
console.log("4 => ",maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)); // 5
console.log("5 => ",maxSubarraySum([2,3], 3)); // null