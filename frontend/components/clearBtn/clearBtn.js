class clearBtn {
    constructor(input, btn, response, error) {
        this.input = input;
        this.btn = btn;
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
            this.element.classList.toggle('hidden', this.input.value.length === 0);
        });
    }
    clearOnClick() {
        this.element.addEventListener('click', () => {
            this.input.value = '';

        });
    }
};