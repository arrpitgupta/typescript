function greet(name: string, callback: (message: string) => void) {
    const message = `Hello, ${name}!`;
    callback(message);
}

greet("Alice", (msg) => {
    console.log(msg);
});
function calculate(a: number, b: number, callback: (result: number) => void) {
    const sum = a + b;
    callback(sum);
}

calculate(5, 10, (result) => {
    console.log("Sum:", result);
});
function fetchData(callback: (error: string | null, data?: string) => void) {
    setTimeout(() => {
        const success = Math.random() > 0.5; 
        if (success) {
            callback(null, "Fetched Data");
        } else {
            callback("Error fetching data");
        }
    }, 1000);
}

fetchData((error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
});


type MathOperation = (a: number, b: number) => number;

function operate(a: number, b: number, operation: MathOperation) {
    console.log("Result:", operation(a, b));
}

const add: MathOperation = (x, y) => x + y;
const multiply: MathOperation = (x, y) => x * y;

operate(4, 5, add);
operate(4, 5, multiply);

