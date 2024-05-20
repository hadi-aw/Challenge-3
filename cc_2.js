// U51313007

// Task 1: Car Class Constructor
class Car {
    constructor(make, speed) {
        this.make = make;
    this.speed = speed;
    }
    
// Task 2: Accelerate Method
accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

// Task 3: Brake Method
brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

}

// Task 4: Create and Test Car Objects
const car1 = new Car(`BMW`, 120);
const car2 = new Car(`Mercedes`, 95);

// Test accelerate and brake methods on Car instances
car1.accelerate(); // Output: BMW is going at 130 km/h
car1.brake(); // Output: BMW is going at 125 km/h

car2.accelerate(); // Output: Mercedes is going at 105 km/h
car2.brake(); // Output: Mercedes is going at 100 km/h
