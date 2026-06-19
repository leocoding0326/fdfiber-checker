import { initautoComplete } from "../../src/dom/search-bar-dom.js";


export class ClearBtn {
    constructor({input, btn, response}) {
        this.input = input;
        this.btn = btn;
        this.response = response;
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
            this.input.focus();
            this.hide(this.btn);
            initautoComplete.clear()
        });
    }
    init() {
        this.showOnInput();
        this.clearOnClick();
    }
};