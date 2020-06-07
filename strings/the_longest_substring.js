// The longest substring exercise
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
function generateString(size) {
	// (10 +[0..26]).toString(36) generates a ASCII char
	return [...Array(size)].map(() => (10 + ~~getRandomArbitrary(0, 7)).toString(36)).join('');
}

const patternSize = 3;
const pattern = generateString(patternSize); 
const str = generateString(100);

function isMatch(pattern, subString) {
	for(let i = 0; i < pattern.length; i++) {
		if (subString.indexOf(pattern.charAt(i)) < 0) return 
	}
	return true;
}

function findLongestSubstring(str, pattern) {
	let curChar;
	let curMatch = '';
	let longestMatch = '';
	for (let i = 0; i <= str.length; i++) {
		curChar = str.charAt(i);
		
		if (i < str.length && pattern.indexOf(curChar) > -1) {
			curMatch += curChar;
		} else {
			if (
				curMatch 
				&& isMatch(pattern, curMatch)
				&& curMatch > longestMatch
			) {
				longestMatch = curMatch; 
			}
			curMatch = '';
		}
	}
	return longestMatch;
}

console.log(str); 
console.log(pattern);
const res = findLongestSubstring(str, pattern); 
console.log(res); 
