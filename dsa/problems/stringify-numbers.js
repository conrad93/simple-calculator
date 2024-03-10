let obj1 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
};

let obj2 = {
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
};

// function stringifyNumbers(obj) {
//     let newObj = Array.isArray(obj) ? [] : {};
//     Object.keys(obj).forEach(key => {
//         if(typeof obj[key] === 'object' && obj[key] !== null){
//             newObj[key] = stringifyNumbers(obj[key]);
//         } else if(typeof obj[key] === 'number'){
//             newObj[key] = obj[key].toString();
//         } else {
//             newObj[key] = obj[key];
//         }
//     });
//     return newObj;
// }

function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

console.log("🚀 ~ stringifyNumbers:", stringifyNumbers(obj1));
console.log("🚀 ~ stringifyNumbers:", stringifyNumbers(obj2));