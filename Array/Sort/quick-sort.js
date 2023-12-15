// Quick Sort: take a pivot element lets consider last item
// iterate through each item, if value less than pivot -> push to left otherwise -> push to right
// use recursion
// Big-O
// worst -> O(n*2);
// Average -> O(nlogn)


function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([2, 1, 0, 3, 7]))
