interface Test {
    start: () => void
    stop: () => void
}

class Car implements Test {
    start(): void {

    }
    stop(): void{

    }
}

const car = new Car()
car.start();
