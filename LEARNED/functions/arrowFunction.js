let age = 19;

let welcome = (age < 18) ?
(firstName, lastName = "Doe") => console.log(`Hello! ${firstName + ' ' + lastName}`) :
(firstName, lastName = "Doe") => console.log(`Welcome! ${firstName + ' ' + lastName}`);

welcome("Franz"); // welcome