const obj1 = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

// function collectStrings(obj){
//     let response = [];
//     Object.keys(obj).forEach(key => {
//         if(typeof obj[key] === 'object' && obj[key] !== null){
//             response = response.concat(collectStrings(obj[key]));
//         } else if(typeof obj[key] === 'string'){
//             response.push(obj[key]);
//         }
//     });
//     return response;
// }

// helper method
function collectStrings(obj) {
    var stringsArr = [];
 
    function gatherStrings(o) {
        for(var key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }
 
    gatherStrings(obj);
 
    return stringsArr;
}

// pure recursion
function collectStrings(obj) {
    var stringsArr = [];
    for(var key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }
 
    return stringsArr;
}

console.log("🚀 ~ collectStrings:", collectStrings(obj1)); // ["foo", "bar", "baz"])
