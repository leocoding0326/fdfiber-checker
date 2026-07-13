class SearchEvent {
    constructor({error, display, input, database}) {
        this.error = error,
        this.display = display,
        this.input = input,
        this.database = database,
        this.valid = true,
        this.searchTerm = ''
    };
    
}