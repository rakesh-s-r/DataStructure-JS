// Binary search: split array into mid; and if target item less than mid item, set right and vice verse
// Big-O: O(logn)

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let midIndex = Math.floor((left + right) / 2);
        if (target == arr[midIndex]) {
            return midIndex;
        }
        if (target < arr[midIndex]) {
            right = midIndex - 1;
        } else {
            left = midIndex + 1;
        }
    }
    return -1;
}

console.log(binarySearch([0, 1, 2, 3, 7], 7))
console.log(binarySearch([0, 1, 2, 3, 4], 9))