let splitSort = require('./splitsort'); 
let {getRandomInt, generateList, pmeathure} = require('./testhelpers');

var original = generateList(2<<15);
		
let splitSortTime = pmeathure(function(sort, list){
    sort(0, list.length, list);
}, splitSort, original.slice());

let nativeSortTime = pmeathure(function(list){
    list.sort(function(a, b){ 
        return a > b ? 1 : a < b ? -1 : 0;
    });
}, original.slice())	
		
console.log('SplitSort: %ss, NativeSort: %ss', splitSortTime/1000, nativeSortTime/1000);