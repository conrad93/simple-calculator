// function isPalindrome(str){
//     if(str.length <= 1){
//         return true;
//     } else if(str[0] !== str[str.length - 1]){
//         return false;
//     }
//     return isPalindrome(str.slice(1,str.length - 1));
// }

function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}


console.log("🚀 ~ isPalindrome:", isPalindrome('awesome')); // false
console.log("🚀 ~ isPalindrome:", isPalindrome('foobar')); // false
console.log("🚀 ~ isPalindrome:", isPalindrome('tacocat')); // true
console.log("🚀 ~ isPalindrome:", isPalindrome('amanaplanacanalpanama')); // true
console.log("🚀 ~ isPalindrome:", isPalindrome('amanaplanacanalpandemonium')); // false