# Data Structure & Algorithm

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