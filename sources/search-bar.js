import addresses from "../database/database.js";//Imports database

/* Algorithm for search bar:
1. Receives a string from the user input;
2. Makes the string all lowercase
3. makes the string from database lowercase as well
4. filters the database until a match is fund
5. if not fund return an empty string
6. if fund return the strings
7. Push the info to the main js to show in the DOM.
*/

const userInputHandler = (userInput) => {
    return addresses.filter((currentAddress) => {
        userInput.toLowerCase() === currentAddress.address.toLowerCase();
    });
}