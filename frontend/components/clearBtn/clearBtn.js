class clearBtn {
    constructor(input, element) {
        this.input = input;
        this.element = element;
    };
    show() {
        this.element.classList.remove('hidden');
    }
    hide() {
        this.element.classList.add('hidden');
    }
    //show element on input
    showOnInput() {
        this.input.addEventListener('input', () => {
            this.element.classList.toggle('hidden', this.input.value.length === 0);
        });
    };
};