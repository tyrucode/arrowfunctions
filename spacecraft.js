/* Task 1: No Parameters: Activate Hyperdrive */
// TODO: Write an arrow function named `activateHyperdrive` with no parameters that print `"Hyperdrive activated!"` to the console. Call `activateHyperdrive` to test it.
let activateHyperdrive = () => {
    console.log("Hyperdrive activated!");
}
activateHyperdrive();
/* Task 2: Implicit Return: Scan for Lifeforms */
// TODO: Create an arrow function named `scanForLife` that implicitly returns `"No lifeforms detected"` without using curly braces. Print the result of calling `scanForLife`.
const scanForLife = () => `no lifeform detected`;
scanForLife();  //for some reason this doesnt work in console even though i called it but when I type it into console it works fine
/* Task 3: Implicit Return with Objects: Log Coordinates */
// TODO: Write an arrow function named `currentCoordinates` that returns an object with properties `x`, `y`, and `z`, representing coordinates in space. Use implicit return. Print the returned object from `currentCoordinates`.
const currentCoordinates = (x, y, z) => ({ x, y, z }); //had to use google for this one, it wasnt in the videos :/
/* Task 4: Understanding `this`: Message from Home Base */
// TODO: Inside an object named `spacecraft`, create a method named `receiveMessage` using arrow function syntax.
//  This method should log `"Message received: "` followed by a message it receives as a parameter. Directly call `receiveMessage` within `spacecraft` and observe. 
// Observe and explain the behavior of `this` in this context as a comment.
const spacecraft = {
    receiveMessage: (message) => {
        console.log(`Message received: ${message}`);
    }
};
spacecraft.receiveMessage('test message');
/*  
 * Observations: So i wasnt sure if you guys wanted me to but I did it like above because it seems like its the only way to make it work because if you use the keyword
this then it will just return 'Message Received:    ' instead of putting the message inside. 
 * TODO: Explain here.
 */
