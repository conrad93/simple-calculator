function insertionSort(arr){
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while(j >= 0 && current < arr[j]){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

console.log("🚀 ~ insertionSort:", insertionSort([5, 64, 34, 25, 12, 22, 11, 90])); // [5, 11, 12, 22, 25, 34, 64, 90]