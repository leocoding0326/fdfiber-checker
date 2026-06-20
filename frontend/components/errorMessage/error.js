export class ErrorMessage {
    constructor({
        displayError,
        message
    }) {
        this.displayError = displayError;
        this.message = message;
    };
    
    showError() {
        this.displayError.hidden = false;
        this.displayError.innerHTML = `
            <i class="fa-solid fa-circle-exclamation" style="color: #e33f27;"></i>` + ' ' + this.message;
    };

    hideError() {
        this.displayError.hidden = true;
        this.displayError.innerHTML = '';
    };
};