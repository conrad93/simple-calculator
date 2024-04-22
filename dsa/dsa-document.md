# Data Structures & Algorithms

### Big O Notation

##### Intro
*Big O notation is a way to measure how fast an algorithm's time or memory needs grow as the amount of data increases. It gives the worst-case scenario of an algorithm's efficiency.*

##### Time Complexity
* Time complexity in the context of Big O notation refers to how the time it takes to run an algorithm grows with the size of the input.
* Time complexity measures how the number of steps (or operations) in an algorithm increases as the size of the input data (n) increases.
* Examples
    1. O(1) - Constant Time: The time to complete doesn't depend on the size of the input data. For example, accessing a specific element in an array.
    2. O(log n) - Logarithmic Time: The time to complete increases logarithmically with the input size. Common in algorithms that divide the problem in half each time, like binary search.
    3. O(n) - Linear Time: The time increases linearly with the size of the input. For example, a for-loop that iterates over an array.
    4. O(n log n) - Log-Linear Time: Typical of algorithms that perform a logarithmic operation (like dividing) in each element of the input, such as in many efficient sorting algorithms like mergesort and heapsort.
    5. O(n²) - Quadratic Time: The time increases quadratically with the input size. Often seen in algorithms with nested iterations over the data set, like in bubble sort.

##### Space Complexity
* Space complexity in the context of Big O notation refers to how the amount of memory an algorithm uses grows with the size of the input.
* Space complexity measures how the amount of memory or storage space required by an algorithm increases as the size of the input data (n) grows.
* Examples
    1. O(1) - Constant Space: The algorithm uses a fixed amount of memory space regardless of the input size. For example, using a finite number of variables in a calculation.
    2. O(n) - Linear Space: The space required grows linearly with the size of the input. This is typical for algorithms that need to store data proportional to the input size, like creating a new array that is a copy of the input array.
    3. O(n²) - Quadratic Space: This occurs when the algorithm needs space that grows at the square of the input size, often seen in algorithms involving multidimensional arrays.

### Problem Solving Patterns

##### Frequency Counter Pattern
*The frequency counter pattern is a common technique used in data structures and algorithms to efficiently track the frequencies of items in a collection (like characters in a string, or items in an array). This pattern often utilizes objects or hash tables to store the frequency of each element, allowing for efficient data access and manipulation.* ([Example](./algorithms/anagram.js))

##### Multiple Pointers Pattern
*The Multiple Pointers pattern is a common approach in data structures and algorithms that involves creating pointers or values that correspond to an index or position and move towards the beginning, end, or middle based on a certain condition. This pattern is efficient for solving problems with minimal space complexity.* ([Example](./algorithms/count-unique-values.js))

##### Sliding Window Pattern
*The Sliding Window pattern is a technique commonly used in data structures and algorithms to perform required operations on a subset of a data structure, typically an array or a string. This pattern is particularly useful for problems that involve contiguous sequences of elements, where these sequences are of fixed length (fixed-size window) or variable length (dynamic window).* ([Example](./algorithms/max-subarray-sum.js))

##### Divide And Conquer Pattern
*The Divide and Conquer pattern is a fundamental algorithmic technique that involves breaking a problem into smaller sub-problems, solving each of these sub-problems independently, and then combining their solutions to solve the original problem. This pattern is recursive in nature and is widely used in a variety of complex computational tasks.*

### Recursion

##### Intro
*A process or a function that calls itself.*

### Searching Algorithms

##### Linear Search
*Linear search, also known as sequential search, is one of the simplest searching algorithms. It is used to find a particular element in a list. The algorithm sequentially checks each element of the list until a match is found or the whole list has been searched.* ([Example](./algorithms/linear-search.js))

##### Binary Search
*Binary search is an efficient algorithm for finding a target value within a sorted array. This search algorithm works on the principle of divide and conquer by repeatedly dividing in half the portion of the list that could contain the target value, thereby reducing the search area by half each time.* ([Example](./algorithms/binary-search.js))

##### Naive String Search
*The naive string search algorithm is a straightforward method for searching a substring within a main string. It checks for the presence of a substring by comparing each character of the main string (also known as the text) to the characters of the substring (also referred to as the pattern), one by one.* ([Example](./algorithms/naive-string-search.js))

### Bubble Sort
* *Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.*
* Steps
    1. Start at the beginning of the array.
    2. Compare the current element with the next element.
    3. If the current element is greater than the next element, swap them.
    4. Move to the next element and repeat the process until the end of the array is reached.
    5. After each pass through the array, the next largest unsorted element will have bubbled up to its correct position.
    6. Repeat the process for the entire array until no swaps are needed, indicating that the array is sorted.
* ([Example](./algorithms/bubble-sort.js))

### Selection Sort
* *Selection sort is a simple comparison-based sorting algorithm.*
* Steps
    1. Start with the first element: Assume the first element is the smallest element.
    2. Find the minimum element: Scan the rest of the array to find the minimum element in the unsorted section.
    3. Swap with the first element: Swap the found minimum element with the first element of the unsorted section.
    4. Move the boundary: Move the boundary of the sorted and unsorted sections one element to the right.
    5. Repeat the process: Repeat the process for each element until the array is sorted.
* ([Example](./algorithms/selection-sort.js))

### Insertion Sort
* *Insertion Sort is a simple and intuitive sorting algorithm that builds the final sorted array (or list) one item at a time.*
* Steps
    1. Consider the first element to be sorted and the rest to be unsorted.
    2. Take the first element in the unsorted segment: Compare this element to the elements in the sorted segment.
    3. Shift all elements in the sorted segment that are greater than the element to be sorted to the right.
    4. Insert the element at its correct position.
    5. Repeat steps 2-4 until the whole list is sorted.
* ([Example](./algorithms/insertion-sort.js))

### Merge Sort
* *Merge Sort is a divide-and-conquer algorithm that divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.*
* Steps
    1. Divide: Split the array into two halves until each subarray contains a single element or no elements.
    2. Conquer: Merge the smaller subarrays into larger, sorted subarrays.
    3. Combine: Finally, merge those sorted subarrays together to produce the sorted array.
* ([Example](./algorithms/merge-sort.js))

### Quick Sort
* *Quick Sort is a highly efficient sorting algorithm and is based on the divide and conquer approach. It divides a large list into two smaller sub-lists: the low elements and the high elements. Quick Sort can then recursively sort the sub-lists.*
* Steps
    1. Select a Pivot: Choose an element from the array as the pivot. The choice of pivot might be the middle element, the first element, or a random element.
    2. Partitioning the Array: Rearrange the array so that all elements with values less than the pivot come before it, while all elements with greater values come after it. After this step, the pivot is in its final position.
    3. Recursive Sort: Recursively apply the above steps to the sub-arrays of elements on the left and right of the pivot.
* ([Example](./algorithms/quick-sort.js))

### Radix Sort
* *Radix Sort is a non-comparative sorting algorithm that processes integer data by individual digit which are then sorted according to each digit's place value. It operates by organizing data from the least significant digit to the most significant digit or vice versa.*
* Steps
    1. Determine the Number of Digits in the Largest Number: This dictates how many times the sorting process needs to be executed.
    2. Bucketing Based on Least Significant Digit (LSD):
        * Place each element into buckets based on the current digit being considered, starting with the least significant digit.
        * Use a stable sort or a counting sort to ensure that earlier sorting passes are not undone.
    3. Rebuild the Array:
        * After all elements are bucketed, reconstruct the array from these buckets, starting with the bucket for the lowest digit values.
    4. Repeat for Each Digit:
        * Move to the next most significant digit and repeat the bucketing and rebuilding process.
    5. Complete When Most Significant Digit is Processed:
        * Once the most significant digit has been sorted, the array is sorted.
* ([Example](./algorithms/radix-sort.js))