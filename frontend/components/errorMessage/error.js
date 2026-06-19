class ErrorMessage {
    constructor({
        displayError,
        message,
        input,
        database,
        key
    }) {
        this.displayError = displayError;
        this.message = message;
        this.input = input;
        this.database = database;
        this.isValid = true;
        this.key = key
    };

    inputExist() {
        return this.database.some(profile => profile[this.key]?.toLowerCase() === this.input.value.toLowerCase());
    };
    
    validation() {
        const exist = this.inputExist();
        const value = this.input.value.trim()
        if (!exist || value.length === 0) {
            this.isValid = false; 
        }
        else this.isValid = true;
    };

    executeError() {
        if(!this.isValid) {
            this.displayError.hidden = false
            this.displayError.innerHTML = this.message;
        } else {
            this.displayError.innerHTML = '';
            this.displayError.hidden = true;
        }
    };

    hideError() {
        this.displayError.hidden = true;
        this.displayError.innerHTML = '';
    };
};