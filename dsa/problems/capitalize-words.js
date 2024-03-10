let words = ["i", "am", "learning", "recursion"];

// function capitalizeWords(words) {
//     let response = [];
//     if(!words.length) return response;
//     let capitalized = words[0].toUpperCase();
//     response.push(capitalized);
//     return response.concat(capitalizeWords(words.slice(1)));
// }

function capitalizeWords(array) {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length - 1)[0].toUpperCase());
    return res;
}

console.log("🚀 ~ capitalizeWords:", capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
