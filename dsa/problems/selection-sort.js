function selectionSort(arr){
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]) minIndex = j;
        }
        if(i !== minIndex){
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

console.log("🚀 ~ selectionSort:", selectionSort([5, 64, 34, 25, 12, 22, 11, 90])); // [5, 11, 12, 22, 25, 34, 64, 90]