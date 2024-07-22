import {dateRangesOverlap} from './date_range.mjs';

[
    [[0,10], [1,3], true],
    [[0,10], [7,8], true],
    [[0,10], [11,20], false],
    [[0,10], [10,20], false],
    [[0,10], [-10, -1], false],
    [[0,10], [-1, 1], true],
    [[0,9], [4, 5], true],
    [[1,10], [9,19], true],
    [[1,10], [20,20], false],
    [[new Date(2024,0,1), new Date(2024,0,10)], [new Date(2024,0,8), new Date(2024,0,20)], true],
    [[new Date(2024,0,1), new Date(2024,0,10)], [new Date(2024,6,18), new Date(2024,6,18)], false],
    [[new Date(2024,6,18), new Date(2024,6,18)], [new Date(2024,0,1), new Date(2024,0,10)], false],
].forEach(function([range1, range2, correctResult], testNumber){
    const res = dateRangesOverlap(range1, range2);
    if (res !== correctResult) {
        console.log('Test #%s failed', testNumber)
        console.dir([range1, range2, correctResult])
    }
})