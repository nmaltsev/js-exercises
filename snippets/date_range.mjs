export function dateRangesOverlap(range1, range2) {
    // Do the date ranges overlap?
    const middle_r1 = range1[0] - 0 + (range1[1] - range1[0]) / 2;
    const middle_r2 = range2[0] - 0 + (range2[1] - range2[0]) / 2;

    if (middle_r1 < middle_r2) {
        return range1[1] > range2[0];
    } else if (middle_r2 < middle_r1) {
        return range2[1] > range1[0];
    }
    
    return true;
}