// Insertion sort: virtually split the array into 2 part one is sorted and another one is unsorted
// Assume first array already sorted so start campare 2nd array in the sense 1th index;
// Select unsorted element and start compare on each item in sorted array
// then swap
// Big-O: O(n*2)

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr
}

console.log(insertionSort([2, 1, 0, 3, 7]))