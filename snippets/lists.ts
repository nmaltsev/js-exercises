export function appendItem<T>(list: T[], item:T): T[] {
    return ([...list, item]);
}
export function removeItem<T>(list: T[], item:T): T[] {
    const pos =  list.indexOf(item);
    if (pos < 0) return list;
    return [...list.slice(0, pos), ...list.slice(pos + 1)];
}
