export class ErrorMessage {
    constructor({
        displayError,
        message
    }) {
        this.displayError = displayError;
        this.message = message;
    };
    
    executeError() {
        this.displayError.hidden = false;
        this.displayError.innerHTML = this.message;
    };

    hideError() {
        this.displayError.hidden = true;
        this.displayError.innerHTML = '';
    };
};