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
