// Format string `12000` -> `12 000`
// @param {Int} number - input string for format
// @return {String} resStr - formatted string
function numberFormat(number){
	for(var str = number + '', i = str.length - 1, buf = '', j = 1; i >= 0; i--, j++){
		buf = (j%3 || !i ? '' : ' ') + str[i] + buf;
	}
	return buf;
};