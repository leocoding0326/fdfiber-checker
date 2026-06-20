export class ErrorMessage {
    constructor({
        displayError,
        message,
        display,
        input
    }) {
        this.displayError = displayError;
        this.message = message;
        this.display = display;
        this.input = input;
    };
    
    showError() {
        this.displayError.hidden = false;
        this.displayError.innerHTML = `
            <i class="fa-solid fa-circle-exclamation" style="color: #e33f27;"></i>` + ' ' + this.message;
        this.input.classList.add('input-error')
    };

    hideError() {
        this.displayError.hidden = true;
        this.displayError.innerHTML = '';
        this.input.classList.remove('input-error')
    };
};