class GuessingGame {
    constructor() {
        this.max = 0;
        this.min = 0;
        this.result = 0;
    }

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        this.result = Math.ceil((this.max + this.min) / 2);
        return this.result;
    }

    
module.exports = GuessingGame;
