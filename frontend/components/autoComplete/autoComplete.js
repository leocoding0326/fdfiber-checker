export class AutoComplete {
    constructor({input, database, display}){
        this.input = input,
        this.database = database,
        this.display = display
        this.isOpen = false
    };

    init() {
        this.runMatches();
    }

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
        this.display.innerHTML = '';

        const matches = this.findMatches();

        this.isOpen = matches.length > 0;

        matches.forEach((match) => {
            const li = document.createElement('li');
            li.textContent = match;
            this.display.appendChild(li);

            li.addEventListener('click', () => {
                this.input.value = li.textContent;
                this.display.innerHTML = '';
                this.input.focus();
                this.isOpen = false;
            })
        })
    };

    runMatches() {
        this.input.addEventListener('input', (event) => {
            const userInput = event.target.value;
            if(!userInput.trim()) {
                this.display.innerHTML = '';
                return;
            }
            this.display.innerHTML = '';
            this.listMatches();
        })
    }
};