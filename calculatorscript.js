// Function to append characters to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
  // Function to clear the display
  function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
  }
  
  // Function to calculate the result
  function calculateResult() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value); // Use eval to evaluate the expression
    } catch (error) {
      display.value = 'Error';
    }
  }
  