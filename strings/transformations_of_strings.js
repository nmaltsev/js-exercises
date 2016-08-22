// Format string `12000` -> `12 000`
// @param {Int} number - input string for format
// @return {String} resStr - formatted string
function numberFormat(number){
	for(var str = number + '', i = str.length - 1, buf = '', j = 1; i >= 0; i--, j++){
		buf = (j%3 || !i ? '' : ' ') + str[i] + buf;
	}
	return buf;
};

// Generate string from alpahbet symbols
// 		randomName(20) return "ivibmdpddpnidspsohdd"
// @param {Int} count - number of chars
// @param {String} out - string from alphabet symbols
function randomName(count){
	var 	n = count,
			out = '';

	while(n-- > 0){
		out += (10 + ~~(Math.random() * 25)).toString(36); 
	}

	return out;
}