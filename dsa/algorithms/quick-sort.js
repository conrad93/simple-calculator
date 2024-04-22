// function quickSort(arr){
//     if(arr.length <= 1) return arr;
//     let pivot = arr[0];
//     let left = [];
//     let right = [];
//     for(let i = 1; i < arr.length; i++){
//         arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)];
// }

function quickSort(arr, left = 0, right = arr.length - 1){
    const swap = (a, b) => {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    };
    
    const pivot = (start = 0, end = arr.length - 1) => {
        let pivotValue = arr[start];
        let swapIdx = start;
        for(let i = start + 1; i <= end; i ++){
            if(pivotValue > arr[i]){
                swapIdx++;
                swap(swapIdx, i);
            }
        }
        swap(start, swapIdx);
        return swapIdx;
    };

    if(left < right){
        let pivotIdx = pivot(left, right);
        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, right);
    } 
    return arr;

}

console.log("🚀 ~ quickSort:", quickSort([5, 64, 34, 25, 12, 22, 11, 90])); // [5, 11, 12, 22, 25, 34, 64, 90]