// function sameFrequency(num1, num2){
//     let Arr1 = String(num1).split("").map(n => Number(n));
//     let Arr2 = String(num2).split("").map(n => Number(n));
//     if(Arr1.length !== Arr2.length) return false;
//     let temp = {};
//     for (const el of Arr1) {
//         temp[el] = temp[el] ? temp[el] += 1 : temp[el] = 1;
//     }
//     for (const el of Arr2) {
//         if(!temp[el]) return false;
//         temp[el] -= 1;
//     }
//     return true;
// }

function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
}

console.log("1 => ", sameFrequency(182,281)); // true
console.log("2 => ", sameFrequency(34,14)); // false
console.log("3 => ", sameFrequency(3589578, 5879385)); // true
console.log("4 => ", sameFrequency(22,222)); // false
console.log("5 => ", sameFrequency(182,821)); // true
