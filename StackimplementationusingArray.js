const stack = [];
const prompt = require('prompt-sync')(); // Ensure 'prompt-sync' is required properly

function pushElement(element) {
    stack.push(element);
    console.log(`${element} pushed to stack.`);
}

function popElement() {
    if (stack.length === 0) {
        console.log("Stack is empty. Nothing to pop.");
    } else {
        const removedElement = stack.pop();
        console.log(`${removedElement} popped from stack.`);
    }
}

function displayStack() {
    if (stack.length === 0) {
        console.log("Stack is empty.");
    } else {
        console.log("Current Stack:", stack);
    }
}

function showMenu() {
    console.log("\nMenu:");
    console.log("1. Push Element");
    console.log("2. Pop Element");
    console.log("3. Display Stack");
    console.log("4. Exit");
}

function startStackApp() {
    while (true) {
        showMenu();
        const choice = prompt("Enter your choice: ");
        switch (choice) {
            case '1':
                const element = prompt("Enter element to push: ");
                pushElement(element);
                break;
            case '2':
                popElement();
                break;
            case '3':
                displayStack();
                break;
            case '4':
                console.log("Exiting the program. Goodbye!");
                return;
            default:
                console.log("Invalid choice. Please try again.");
        }
    }
}

startStackApp();
