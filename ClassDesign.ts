interface Vehicle {
    int set_num_of_wheels()
    int set_num_of_passengers()
    boolean has_gas()
}

// Define Car Class implemented Vehicle
class Car implements Vehicle {
    numberOfWheels: number;
    numberOfPassengers: number;
    hasGas: boolean;

    constructor(wheels: number, passengers: number, gas: boolean) {
        this.numberOfWheels = wheels;
        this.numberOfPassengers = passengers;
        this.hasGas = gas;
    }

    set_num_of_wheels() {
        console.log('This car has ' + this.numberOfWheels + ' wheels.');
    }

    set_num_of_passengers() {
        console.log('This car can take ' + this.numberOfWheels + ' passengers.');
    }

    has_gas() {
        if (this.hasGas) {
            console.log('This car has enough gas.');
            return true;
        }
        console.log('This car does not has enough gas.');
    }
}
// Initiate object
let car: Car = new Car(4, 4, true);

// Use methods
car.set_num_of_wheels();
car.set_num_of_passengers();
car.has_gas();


// Define Plane Class implemented Vehicle
class Plane implements Vehicle {
    numberOfWheels: number;
    numberOfPassengers: number;
    hasGas: boolean;
    constructor(wheels: number, passengers: number, gas: boolean) {
        this.numberOfWheels = wheels;
        this.numberOfPassengers = passengers;
        this.hasGas = gas;
    }
    set_num_of_wheels() {
        console.log('This plane has ' + this.numberOfWheels + ' wheels.');
    }

    set_num_of_passengers() {
        console.log('This plane can take ' + this.numberOfWheels + ' passengers.');
    }

    has_gas() {
        if (this.hasGas) {
            console.log('This plane has enough gas.');
            return true;
        }
        console.log('This plane does not has enough gas.');
    }
}

// Initiate object
let plane: Plane = new Plane(12, 292, false);

// Use methods
plane.set_num_of_wheels();
plane.set_num_of_passengers();
plane.has_gas();
