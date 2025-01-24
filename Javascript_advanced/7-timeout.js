/**
 * Write the following commands in the following order:
    - Log to the console `Start of the execution queue`
    - Log to the console `Final code block to be executed` using setTimeout (with delay of 0)
    - Using a loop that iterates 100 times, each iteration logs to the console the iteration number
    - Log to the console `End of the loop printing`
*/

// This runs first - it's synchronous
console.log("Start of the execution queue");

// 🚨 This is asynchronous - gets pushed to the event queue to run later even though the delay is 0 milliseconds
setTimeout(() => console.log("Final code block to be executed"), 0);

// This is synchronous - runs in the main thread
for(let i = 1; i <= 100; i++) {
    console.log(i);
}

// This is synchronous - runs in the main thread
console.log("End of the loop printing");

/**
 * Your code should log to the console the following:
 * Start of the execution queue
 * 1
 * 2
 * ...
 * 100
 * End of the loop printing
 * Final code block to be executed
 */

/**
 *  let's understand the JavaScript execution order:
        - JavaScript runs synchronous code first (the main execution thread)
        - Asynchronous operations (like setTimeout) get pushed to a special queue
        - This queue only runs after the main thread is complete
 */