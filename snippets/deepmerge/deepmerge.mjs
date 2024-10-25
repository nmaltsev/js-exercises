/**
 * This function merges one object into another
 * @param {Object} obj 
 * @param {Object} update 
 */
export function deepmerge(obj, update) {
    if (Array.isArray(obj) && Array.isArray(update)) {
        for(let key in update) {
            // Get a list of all possible similar objects in an array
            const items = obj.filter(objItem => objsAreSimilar(objItem, update[key]));
            let j = items.length;
            
            if (j < 1) {
                // add object to array if object has no similar object 
                const {__id, ...rest} = update[key];
                obj.push(rest);
            } else {
                while(j-- > 0) {
                    // TODO check if the object is read only
                    if (items[j].hasOwnProperty('$$typeof')) {
                        items[j] = update[key];
                        continue;
                    }
                    deepmerge(items[j], update[key]);
                }
            }
        }
    } else if (typeof(update) == 'object') {
        for(let key in update) {
            if (typeof((update)[key]) == 'object' && typeof((obj)[key]) == 'object') {
                // TODO check if the object is read only
                // @ts-ignore
                if (obj[key].hasOwnProperty('$$typeof')) {
                    // @ts-ignore
                    obj[key] = update[key];
                    continue;                  
                }
                // @ts-ignore
                deepmerge(obj[key], update[key])
            } else {
                // @ts-ignore
                obj[key] = update[key]
            }
        }
    }
    return obj;
}
/**
 * Checks if objects are close to each other
 * @param {Object} leftObj 
 * @param {Object} rightObj 
 * @returns {boolean}
 */

function objsAreSimilar(leftObj, rightObj) {
    let commonProps;
    // Use __id then resolve possible collision
    // This property is needed to mark such objects as dissimilar:
    // { 'id': 1, 'value': null },
    // { 'id': 2, 'value': null }
    if (rightObj.hasOwnProperty('__id')) {
        commonProps = Array.isArray(rightObj['__id']) ? rightObj['__id'] : [rightObj['__id']];
    } else {
        commonProps = getArrayIntersection(Object.keys(leftObj), Object.keys(rightObj))
    }
    
    let i = commonProps.length;

    while(i-- > 0) {
        // TODO skip if leftObj[commonProps[i]] === null or undefined 
        if (leftObj[commonProps[i]] === rightObj[commonProps[i]]) return true;
    }

    return false;
}// @ts-ignore
function getArrayIntersection(array1, array2){
    return array1.filter(function(n) {
        return array2.indexOf(n) !== -1;
    });
}

export function clone(obj) {
    if (typeof structuredClone === 'function') {
        return structuredClone(obj);
    }
    
    return JSON.parse(JSON.stringify(obj))
}