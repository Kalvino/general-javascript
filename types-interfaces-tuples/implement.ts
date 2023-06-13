// classes implement interfaces
class PointImplementation implements Point {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
  }

  public distance(other: Point): number {
      return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
  }
}

// Interfaces in TypeScript can extend classes
class Car {
  printCar = () => {
    console.log("this is my car")
  }
};

interface NewCar extends Car {
  name: string;
};

class NewestCar implements NewCar {
  name: "Car";
  engine: string
  constructor(engine:string) {
    this.engine = engine
  }
  printCar = () => {
    console.log("this is my car")
  }
};