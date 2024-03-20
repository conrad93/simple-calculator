// function bubbleSort(arr) {
//     for (let i = arr.length; i > 0; i--) {
//         let swap = false;
//         for (let j = 0; j < i - 1; j++) {
//             if(arr[j] > arr[j + 1]){
//                 let temp = arr[j + 1];
//                 arr[j + 1] = arr[j];
//                 arr[j] = temp;
//                 swap = true;
//             }
//         }
//         if(!swap) break;
//     }
//     return arr;
// }

function bubbleSort(arr) {
    let n = arr.length;
    let swapped = false;
    do {
        swapped = false;
        for (let i = 1; i < n; i++) {
            if(arr[i - 1] > arr[i]){
                let temp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = temp;
                swapped = true;
            }
        }
        n--;
    } while (swapped);
    return arr;
}

console.log("🚀 ~ bubbleSort:", bubbleSort([5, 64, 34, 25, 12, 22, 11, 90])); // [5, 11, 12, 22, 25, 34, 64, 90]