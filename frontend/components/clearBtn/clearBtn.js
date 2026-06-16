class clearBtn {
    constructor(input, btn, response, error) {
        this.input = input;
        this.btn = btn;
        this.response = response;
        this.error = error;
    };
    show(element) {
        element.classList.remove('hidden');
    }
    hide(element) {
        element.classList.add('hidden');
    }
    //show element on input
    showOnInput() {
        this.input.addEventListener('input', () => {
            this.btn.classList.toggle('hidden', this.input.value.length === 0);
        });
    }
    clearOnClick() {
        this.btn.addEventListener('click', () => {
            this.input.value = '';
            this.hide(this.response);
            this.hide(this.error);
            this.input.focus();
        });
    }
};