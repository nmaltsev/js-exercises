export function isEmpty<T>(collection:Record<strin, T>):boolean {
    return Object.keys(collection).length < 1;
}

export function removePropFromObject<T>(obj:Record<string, T>, prop:string):Record<string, T> {
    const {[prop]: _, ...rest} = obj
    return rest
}

export function match(metadata: Record<string, string>, referenceObject: Record<string, string>):boolean {
    // match({'key1': 'abc', 'key2': 'abc2', 'key3': 'abc3'}, {key1: 'ab', key3: 'c3'})
    for (let key of Object.keys(referenceObject)) {
        // if (!referenceObject[key]) continue;
        if (!metadata.hasOwnProperty(key)) return false;
        if (metadata[key].indexOf(referenceObject[key]) < 0) return false;
    }
    return true;
}

function normaliseValue(value: any):string {
    return (value + '').replaceAll(' ', '').replaceAll('\n', '').toLowerCase();
}
export function findPattern(obj: any, pattern: string): boolean {
    // findPattern({aa:11,bb:{cc: 'help'}}, 'lp') === true
    if (Array.isArray(obj)) {
        let i = obj.length;
        while(i-- > 0) {
            if (findPattern(obj[i], pattern))
                return true;
        }
    }
    else if (obj.constructor && obj.constructor === Object) {
        for(var key in obj) {
            if (!obj.hasOwnProperty(key)) continue;
            if (findPattern(obj[key], pattern))
                return true;
            
        }
    }
    if (normaliseValue(obj).indexOf(pattern) > -1)
        return true;
    return false;
}

export function batchPatch(source: any, values: Record<string, string|number>): any {
    for (let key in values) {
        if (!values.hasOwnProperty(key)) continue;
        dset(source, key, values[key])
    }
    return source;
}

export function dget(obj: any, key: string, _default: any = undefined): any {
	if (!~key.indexOf('.')) return obj.hasOwnProperty(key) ? obj[key] : _default;

	let 	keys = key.split('.'),
			i = -1, 
			len = keys.length, 
			ref = obj;

	while (i++, i < len) {
		ref = ref[keys[i]];

		if (ref == undefined) break;
	}
	return ref;
};

export function dset(obj: any, name:string, value: any): void {
	if (!~name.indexOf('.')) obj[name] = value;
    
    let 	prev,
            parts = name.split('.'),
            root = obj,
            len = parts.length,
            seg;
            
    for(let i = 0; seg = parts[i], i < len - 1; i++){
        if (!root[seg]){
            root[seg] = {};
        }
        root = root[seg];
    }
    prev = root[seg];
    root[seg] = value;
};
