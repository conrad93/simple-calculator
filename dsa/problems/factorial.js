function factorial(n){
    if(n < 0) return 0;
    if(n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log("🚀 ~ factorial:", factorial(1)); // 1
console.log("🚀 ~ factorial:", factorial(2)); // 2
console.log("🚀 ~ factorial:", factorial(4)); // 24
console.log("🚀 ~ factorial:", factorial(7)); // 5040