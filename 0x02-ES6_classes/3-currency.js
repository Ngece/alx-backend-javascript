export default class Currency {
    // Constructor
    constructor(code, name) {
        this._code = code;
        this._name = name;
    }
    
    // Setter and getter for code
    set code(code) {
        if (typeof code === 'string') {
        this._code = code;
        } else {
        throw new TypeError('Code must be a string');
        }
    }
    
    get code() {
        return this._code;
    }
    
    set name(name) {
        if (typeof name === 'string') {
        this._name = name;
        } else {
        throw new TypeError('Name must be a string');
        }
    }
    
    get name() {
        return this._name;
    }
    
    displayFullCurrency() {
        return `${this.name} (${this.code})`;
    }
}