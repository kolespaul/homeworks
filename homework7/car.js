class Car {
    #brand;
    #model;
    #yearOfManufacturing;
    #maxSpeed;
    #maxFuelVolume;
    #fuelConsumption;
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;

    get brand() {
        return this.#brand;
    }

    set brand(value) {
        if(typeof value !== 'string' || value.length < 1 || value.length > 50) {
            throw new Error('Error');
        } else {
            this.#brand = value;
        }
    }

    get model() {
        return this.#model;
    }

    set model(value) {
        if(typeof value !== 'string' || value.length < 1 || value.length > 50) {
            throw new Error('Error');
        } else {
            this.#model = value;
        }
    }

    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }

    set yearOfManufacturing(value) {
        if(!Number.isInteger(value) || value < 1900 || value > 2021) {
            throw new Error('Error');
        } else {
            this.#yearOfManufacturing = value;
        }
    }

    get maxSpeed() {
        return this.#maxSpeed;
    }

    set maxSpeed(value) {
        if(!Number.isInteger(value) || value < 100 || value > 300) {
            throw new Error('Error');
        } else {
            this.#maxSpeed = value;
        }
    }

    get maxFuelVolume() {
        return this.#maxFuelVolume;
    }

    set maxFuelVolume(value) {
        if(!Number.isInteger(value) || value < 5 || value > 20) {
            throw new Error('Error');
        } else {
            this.#maxFuelVolume = value;
        }
    }

    get fuelConsumption() {
        return this.#fuelConsumption;
    }

    set fuelConsumption(value) {
        if(!Number.isInteger(value) || value < 5) {
            throw new Error('Error');
        } else {
            this.#fuelConsumption = value;
        }
    }

    get currentFuelVolume() {
        return this.#currentFuelVolume;
    }

    get isStarted() {
        return this.#isStarted;
    }

    get mileage() {
        return this.#mileage;
    }

    start() {
        if(this.#isStarted === true) {
            throw new Error('Error');
        } else if (this.#currentFuelVolume === 0) {
            throw new Error('Error');
        } else {
            return this.#isStarted = !this.#isStarted;
        }
    }

    shutDownEngine() {
        if(this.#isStarted === false) {
            throw new Error('Error');
        } else {
            return this.#isStarted = !this.#isStarted;
        }
    }

    fillUpGasTank(value) {
        if(!Number.isInteger(value) || value <= 0) {
            throw new Error('Error');
        } else if((this.#currentFuelVolume + value) > this.#maxFuelVolume) {
            throw new Error('Error');
        } else {
            this.#currentFuelVolume = this.#currentFuelVolume + value;
        }
    }

    drive(speed, time) {
        if(!Number.isInteger(speed) || speed <= 0) {
            throw new Error('Error');
        } else if(!Number.isInteger(time) || time <= 0) {
            throw new Error('Error');
        } else if(speed > this.#maxSpeed) {
            throw new Error('Error');
        } else if(this.#isStarted === false) {
            throw new Error('Error');
        } else if((speed * time) > (this.currentFuelVolume / this.#fuelConsumption) * 100) {
            throw new Error('Error');
        } else {
            this.#mileage = speed * time;
            this.#currentFuelVolume = this.#currentFuelVolume - ((speed * time) / 100 * this.#fuelConsumption);
        }
    }
}

module.exports = Car;