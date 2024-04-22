function power(n, p){
    if(p === 0) return 1;
    return n * power(n, p - 1);
}

console.log("🚀 ~ power:", power(2,0)); // 1
console.log("🚀 ~ power:", power(2,2)); // 4
console.log("🚀 ~ power:", power(2,4)); // 16