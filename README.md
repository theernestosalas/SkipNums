# Performance Comparison of FizzBuzz Algorithms

This repository contains two variations of the FizzBuzz problem solution. Despite both algorithms having similar theoretical time complexities, in practice, they exhibit distinct performance characteristics. We measure and compare the performance of each approach as the input size grows.

## Overview

FizzBuzz is a common programming interview question. Given a number `n`, the task is to:

- Print `Fizz` for numbers divisible by 3.
- Print `Buzz` for numbers divisible by 5.
- Print `FizzBuzz` for numbers divisible by both 3 and 5.
- Print the number itself if none of the above conditions are met.

The two approaches in this repository are:

1. **Standard Looping Approach**: This method checks each number in a loop from `1` to `n`. Theoretical time complexity is linear, O(n).
2. **Skip Numbers Approach**: This approach takes advantage of the fact that we know numbers divisible by 3 and 5, skipping unnecessary checks. Theoretical time complexity is also linear, O(n), but with fewer iterations in practice.

## Results

Through our tests, we discovered that the **Skip Numbers Approach** tends to perform faster than the **Standard Looping Approach** across various input sizes, up to 100 million. This improved performance can be attributed to the fact that the second approach iterates through fewer numbers, thus being more efficient in practice, despite both methods sharing the same O(n) time complexity. The results of these tests can be viewed in the console as a table.

## How to Run

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
