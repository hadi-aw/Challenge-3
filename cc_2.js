U51313007

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
