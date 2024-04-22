function fibonacciSequence(n){
    if(n <= 2) return 1;
    return fibonacciSequence(n - 1) + fibonacciSequence(n - 2);
}

console.log("🚀 ~ fibonacciSequence:", fibonacciSequence(4)); // 3
console.log("🚀 ~ fibonacciSequence:", fibonacciSequence(10)); // 55
console.log("🚀 ~ fibonacciSequence:", fibonacciSequence(28)); // 317811
console.log("🚀 ~ fibonacciSequence:", fibonacciSequence(35)); // 9227465