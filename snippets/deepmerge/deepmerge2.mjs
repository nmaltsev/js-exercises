// The gooal of this mod is to create a function tha will use Object.assign({}, original_object, {updated_property: new_value})

export function deepmerge2(obj, update) {

}
export function deepmerge3(obj, property, value) {
    let 	keys = property.split('.'),
			i = -1, 
			len = keys.length, 
			ref = obj;
    console.dir(keys)

	while (i++, i < len) {
		console.log('key %s %s', keys[i], i)
        
        if (i == len -1) {
            if (typeof(ref[keys[i]]) === 'object') {
                ref[keys[i]] = {
                    ...ref[keys[i]], 
                    ...value
                }
            } else {
                ref[keys[i]] = value
            }
        }
        // console.log(JSON.stringify(ref, null, '\t'))
        ref = ref[keys[i]];
        // TODO use Object.assign

		if (ref == undefined) break;
	}
	return ref;
}


const obj1 = {fields: [{id: 1, metadata: {key1: 'value1', key2: 'value2'}}]}
deepmerge3(obj1, 'fields.0.metadata', {test: 'abc'})
console.log(JSON.stringify(obj1, null, '\t'))