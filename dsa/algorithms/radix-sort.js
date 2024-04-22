function radixSort(arr){
    const getDigit = (num, i) => {
        return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
    };

    const digitCount = (num) => {
        if(num === 0) return 1;
        return Math.floor(Math.log10(Math.abs(num))) + 1
    };

    const mostDigits = (arr) => {
        let maxDigit = 0;
        for(let item of arr){
            maxDigit = Math.max(maxDigit, digitCount(item))
        }
        return maxDigit;
    };
    
    let maxDigitCount = mostDigits(arr);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k);
            digitBuckets[digit].push(arr[i]);
        }
        arr = [].concat(...digitBuckets);
    }

    return arr;
}

console.log("🚀 ~ radixSort:", radixSort([5, 64, 5357, 748392, 34, 25, 444, 12, 22, 11, 90])); // [5, 11, 12, 22, 25, 34, 64, 90, 444, 5357, 748392]