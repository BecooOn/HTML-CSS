document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    let currentInput = '';
  
    function appendToDisplay(value) {
      if (currentInput === 'Error') {
        clearDisplay();
      }
  
      currentInput += value;
      display.textContent = currentInput;
    }
  
    function clearDisplay() {
      currentInput = '';
      display.textContent = '0';
    }
  
    function calculateResult() {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
      } catch (error) {
        display.textContent = 'Error';
      }
    }
  
    function addEventListenersToButtons() {
      const buttons = document.querySelectorAll('.button');
      buttons.forEach(button => {
        button.addEventListener('click', function () {
          const buttonText = this.textContent;
  
          if (buttonText === 'AC') {
            clearDisplay();
          } else if (buttonText === '=') {
            calculateResult();
          } else {
            appendToDisplay(buttonText);
          }
        });
      });
    }
  
    addEventListenersToButtons();
  });
  