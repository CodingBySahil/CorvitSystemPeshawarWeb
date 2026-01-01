// Select input and all buttons
        const input = document.getElementById('inputBox');
        const buttons = document.querySelectorAll('button');

        let currentInput = "";

        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const value = e.target.innerText;

                if (value === "AC") {
                    currentInput = "";
                    input.value = "";
                } else if (value === "DEL") {
                    currentInput = currentInput.slice(0, -1);
                    input.value = currentInput;
                } else if (value === "=") {
                    try {
                        // Evaluate expression safely
                        let result = eval(currentInput);
                        input.value = result;
                        currentInput = result.toString();
                    } catch {
                        input.value = "Error";
                        currentInput = "";
                    }
                } else if (value === "%") {
                    try {
                        currentInput = (parseFloat(currentInput) / 100).toString();
                        input.value = currentInput;
                    } catch {
                        input.value = "Error";
                        currentInput = "";
                    }
                } else {
                    // Append numbers or operators
                    currentInput += value;
                    input.value = currentInput;
                }
            });
        });