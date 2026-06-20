export class ErrorMessage {
    constructor({
        displayError,
        message,
        display,
    }) {
        this.displayError = displayError;
        this.message = message;
        this.display = display;
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