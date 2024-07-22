export function var_dump<T>(value: T, ...label: any[]): T {
    if (label.length < 1) {
        console.log('Debug:');
    } else {
        console.log(...label);
    }
    console.dir(value)
    return value;
}