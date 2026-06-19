class ErrorMessage {
    constructor({
        displayError,
        message,
        input,
        database,
        displayResult,
    }) {
        this.displayError = displayError;
        this.message = message;
        this.input = input;
        this.database = database;
        this.displayResult = displayResult;
        this.isValid = true
    }
    addressExist() {
        return database.some(profile => profile.address.toLowerCase() === input.toLowerCase());
    }
    
}