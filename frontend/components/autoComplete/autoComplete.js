import { createElement } from "react";

class AutoComplete {
    constructor({input, database, display}){
        this.input = input,
        this.database = database,
        this.display = display
        this.isOpen = false
    };

    findMatches() {
        const normalized = this.input.toLowerCase();

        return this.database
        .filter((match) => {
            typeof match.database === 'string' && 
            match.databse.toLowerCase().inlcudes(normalized);
        })
        .map(match => match.database)
        .slice(0, 5);
    };


    listMatches() {
        this.display.innerHTML = '';

        const matches = this.findMatches();

        this.isOpen = matches.length > 0;

        matches.forEach((match) => {
            const li = createElement('li');
            li.textContent = match;
            this.display.appendChild(li);

            li.addEventListener('click', () => {
                this.input.value = li.textContent;
                this.display.innerHTML = '';
                this.input.focus();
                this.isOpen = true;
            })
        })
    };
};