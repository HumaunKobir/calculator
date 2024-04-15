function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;
    var result = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        result.innerHTML = "Please enter valid numbers.";
        return;
    }

    switch (operation) {
        case 'add':
            result.innerHTML = "Result: " + (num1 + num2);
            break;
        case 'subtract':
            result.innerHTML = "Result: " + (num1 - num2);
            break;
        case 'multiply':
            result.innerHTML = "Result: " + (num1 * num2);
            break;
        case 'divide':
            if (num2 === 0) {
                result.innerHTML = "Cannot divide by zero.";
            } else {
                result.innerHTML = "Result: " + (num1 / num2);
            }
            break;
        default:
            result.innerHTML = "Invalid operation.";
    }
}
