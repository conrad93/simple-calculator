// function reverse(str){
//     if(!str.length) return '';
//     return str[str.length - 1] + reverse(str.slice(0,str.length - 1));
// }

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}


console.log("🚀 ~ reverse:", reverse('awesome')); // 'emosewa'
console.log("🚀 ~ reverse:", reverse('rithmschool')); // 'loohcsmhtir'