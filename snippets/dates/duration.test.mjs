import {humanReadableDuration} from './duration.mjs';

const tests = [
    {inputs: [new Date('2025-05-15T10:00:00'), new Date('2025-05-15T16:30:45')], output: "6h30m"},
    {inputs: [new Date('2025-05-15T10:00:00'), new Date('2025-05-15T10:00:30')], output: "30s"},
    {inputs: [new Date('2025-05-15T10:00:00'), new Date('2025-05-15T10:01:00')], output: "1m"},
    {inputs: [new Date('2025-05-15T10:00:00'), new Date('2025-05-15T10:01:01')], output: "1m1s"},
]

tests.forEach(function(testCase){
    const res = humanReadableDuration(...testCase.inputs)
    if (res !== testCase.output) {
        console.log("Test failed")
        console.dir(testCase)
    }
})

