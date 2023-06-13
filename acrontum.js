class Animal {
  private _name: string;

  constructor(name: string) {
    this.name = name;
  }

  set name(name: string) {
    if (!name) {
      throw new Error('How else will you find it when it gets lost?');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

class Bird extends Animal {
  constructor(name?: string) {
    super(name ?? 'birb');
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  bark(): string;
  bark(count: number): string[];
  bark(at: Animal): boolean;
  bark(arg?: number | Animal): string | string[] | boolean {
    if (typeof arg === 'number') {
      const barks = Array.from(Array(arg ?? 3)).fill('woof!');
      console.log(barks.join(' '));

      return barks;
    }

    if (arg instanceof Dog) {
      console.log(`hello ${arg.name}!`);

      return true;
    }

    if (arg instanceof Animal) {
      console.log(`woof woof ${arg.name}!`);

      return false;
    }

    return 'woof?';
  }
}

const alfie = new Dog('Alfie');

console.log(alfie.bark(new Bird()));