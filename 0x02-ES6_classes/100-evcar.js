export default class EVCar extends Car {
    constructor(brand, motor, color, range) {
        super(brand, motor, color);
        this._range = range;
    }
    
    get range() {
        return this._range;
    }
    
    cloneCar() {
        return new EVCar(this.brand, this.motor, this.color, this.range);
    }
}