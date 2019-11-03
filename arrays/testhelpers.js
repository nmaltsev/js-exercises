/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateList(num) {
    let list = new Array(num);
    let i = num;

    while(i-- > 0){
        list[i] = getRandomInt(0, 2<<16);
    }
    return list;
}

function pmeathure(cb, ...args){
    let startTime = Date.now();
    cb.apply(null, args);
    return Date.now() - startTime;
} 

module.exports = {
    getRandomInt,
    generateList,
    pmeathure    
};