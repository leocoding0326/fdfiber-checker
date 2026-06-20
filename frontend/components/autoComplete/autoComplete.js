export class AutoComplete {
    constructor({input, database, display, error}){
        this.input = input,
        this.database = database,
        this.display = display,
        this.error = error
    };
    

    init() {
        this.runMatches();
    };

    
    clear() {
        this.display.classList.add('hidden');
    };

    show() {
        this.display.classList.remove('hidden')
    };

    findMatches() {
        const normalized = this.input.value.toLowerCase();

        return this.database
        .filter(match => 
            typeof match.address === 'string' && 
            match.address.toLowerCase().includes(normalized)
        )
        .map(match => match.address)
        .slice(0, 5);
    };


    listMatches() {
        this.clear();
        const matches = this.findMatches();
        matches.forEach((match) => {
            const li = document.createElement('li');
            li.textContent = match;
            this.display.appendChild(li);
            this.show();

            li.addEventListener('click', () => {
                this.input.value = li.textContent;
                this.clear();
                this.input.focus();
            })
        })
    };

    runMatches() {
        this.input.addEventListener('input', (event) => {
            const userInput = event.target.value;
            this.error.hidden = true;
            this.input.classList.remove('input-error')
            if(!userInput.trim()) {
                this.display.innerHTML = '';
                this.clear();
                return;
            }
            this.display.innerHTML = '';
            this.listMatches();
        })
    };
};