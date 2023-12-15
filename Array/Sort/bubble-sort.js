// Bubble sort: campare adjacent element if its greater swap the item
// Big-O: O(n*2)


function bubbleSort(arr) {
    let swap;
    do {
        swap = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swap = true;
            }
        }
    } while (swap);
    return arr;
}

console.log(bubbleSort([2, 1, 0, 3, 7]))