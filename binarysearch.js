// Func to perform binary search
function binarySearch(array, target) {
    let left = 0;                   // Init left pointer
    let right = array.length - 1;   // Init right pointer

    while (left <= right) {
        // Find the middle index
        let mid = Math.floor((left + right) / 2);

        // Check if the target is at the middle index
        if (array[mid] === target) {
            return mid; // Target found, return the index
        }

        // If the target is greater than the middle element,
        // adjust the left pointer to search the right half
        else if (array[mid] < target) {
            left = mid + 1;
        }

        // If the target is less than the middle element,
        // adjust the right pointer to search the left half
        else {
            right = mid - 1;
        }
    }

    // Target not found, return -1
    return -1;
}

let numbers = [1, 3, 5, 7, 9, 11, 13];
let target = 7;
let result = binarySearch(numbers, target);

if (result !== -1) {
    console.log(`Target found at index: ${result}`);
} else {
    console.log("Target not found in the array.");
}
