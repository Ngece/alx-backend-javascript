export default class Building {
    constructor(sqft) {
        this._sqft = sqft;
        if (this.constructor !== Building && !this.evacuationWarningMessage) {
        throw Error('Class extending Building must override evacuationWarningMessage');
        }
    }
    
    set sqft(sqft) {
        if (typeof sqft !== 'number') {
        throw TypeError('sqft must be a number');
        }
        this._sqft = sqft;
    }
    
    get sqft() {
        return this._sqft;
    }
}