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
};