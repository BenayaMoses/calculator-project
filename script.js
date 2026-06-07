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
function square() {
    try {
        display.value = Math.pow(eval(display.value), 2);
    } catch {
        display.value = 'Error';
    }
    shouldResetDisplay = true;
}
function sqrt() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch {
        display.value = 'Error';
    }
    shouldResetDisplay = true;
}
function fraction() {
    try {
        display.value = 1 / eval(display.value);
    } catch {
        display.value = 'Error';
    }
    shouldResetDisplay = true;
}
function toggleSign() {
    if (display.value !== '0' && display.value !== 'Error') {
        if (display.value.startsWith('-')) {
            display.value = display.value.slice(1);
        } else {
            display.value = '-' + display.value;
        }
    }
}
function calculate() {
    try {
        let expression = display.value;
        let result = eval(expression);
        display.value = result;
        shouldResetDisplay = true;
    } catch (error) {
        display.value = 'Error';
        shouldResetDisplay = true;
    }
}