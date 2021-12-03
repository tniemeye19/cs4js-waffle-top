// recursive approach
// if num <= 2
//   return 1 (the first two numbers in sequence)

// otherwise return
//   same logic with num - 1
//   plus
//   same logic with num - 2

// linear approach
// if num <= 2
//   return 1 (the first two numbers in sequence)

// create new array with [1, 1]

// loop from i = 2 to num
//   push [i - 1] + [i - 2] to array

// return last item in array

const linear = num => {
    // Implement the Fibonacci algorithm using the linear approach
    // YOUR CODE HERE
    //
    let fib = [0, 1];
    let data = [];
  
    for (let i = 2; i <= num; i++) {
      fib[i] = fib[i-1] + fib[i-2];
      data.push(fib[i]);
    }
  
    return data.slice(-1);
  };
  
  console.log(linear(10)); // => 55