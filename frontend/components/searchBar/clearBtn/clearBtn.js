import { initAutoComplete } from "../../../src/dom/searchBarDom.js";


export class ClearBtn {
    constructor({input, btn, response, error}) {
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
            this.error.hidden = true;
            this.input.focus();
            this.input.classList.remove('input-error')
            this.hide(this.btn);
            initAutoComplete.clear();
        });
    }
    init() {
        this.showOnInput();
        this.clearOnClick();
    }
};