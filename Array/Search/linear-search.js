// Linear search: search each item in a array
// Big-O 
// O(n)

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// console.log(linearSearch([ 0, 1, 2, 3, 7], 7))
console.log(linearSearch([ 0, 1, 2, 3, 7], 9))