// function capitalizeFirst(arr) {
//     let response = [];
//     if(!arr.length) return response;
//     let capitalized = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
//     response.push(capitalized);
//     return response.concat(capitalizeFirst(arr.slice(1)));
// }

function capitalizeFirst(array) {
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string =
        array.slice(array.length - 1)[0][0].toUpperCase() +
        array.slice(array.length - 1)[0].substr(1);
    res.push(string);
    return res;
}

console.log("🚀 ~ capitalizeFirst:", capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']