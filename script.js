const display = document.getElementById('display');
let shouldResetDisplay = false;

function appendValue(value) {
    if (display.value === '0' || shouldResetDisplay) {
        if (value !== '.') {
            display.value = '';
        }
        shouldResetDisplay = false;
    }
    display.value += value;
}

function clearDisplay() {
    display.value = '0';
}

function deleteLast() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
}

function calculate() {
    try {
        let expression = display.value;
        
        if (expression.includes('%')) {
            expression = expression.replace(/%/g, '/100');
        }

        let result = eval(expression);
        display.value = result;
        shouldResetDisplay = true;
    } catch (error) {
        display.value = 'Error';
        shouldResetDisplay = true;
    }
}
