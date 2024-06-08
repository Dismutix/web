document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('input');
    const output = document.getElementById('output');

    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const userInput = input.value;
            processInput(userInput);
            input.value = '';
        }
    });

    function processInput(input) {
        let result;
        try {
            result = eval(input);
        } catch (error) {
            result = 'Error en la fórmula';
        }

        displayOutput(input, result);
    }

    function displayOutput(input, result) {
        const inputElement = document.createElement('div');
        inputElement.textContent = `> ${input}`;
        output.appendChild(inputElement);

        const resultElement = document.createElement('div');
        resultElement.textContent = `${result}`;
        output.appendChild(resultElement);

        // Scroll down to the latest output
        output.scrollTop = output.scrollHeight;
    }
});
