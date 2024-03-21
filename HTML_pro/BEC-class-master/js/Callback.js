// Function that takes a callback function as an argument
function doSomethingAsync(callback) {
    setTimeout(() => {
      // Simulate an asynchronous operation
      console.log("Async operation completed");
      // Call the callback function
      callback();
    }, 8000); // Simulating a delay of 2 seconds
  }
  
  // Callback function to be executed after the asynchronous operation
  function callbackFunction() {
    console.log("Callback function executed");
  }
  
  // Calling the function with the callback function as an argument
  doSomethingAsync(callbackFunction);
  