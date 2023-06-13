class Person {
  name: string;
  age: number;
}

class Child  extends Person {}

class Female  implements Person {
  // name: string;
  // age: number;
} // it has to implement Person members name and age - uncomment to test

class Man implements Person {
  name: string;
  age: number;
}

// NOTE extend classes, implement types

// if you have a base class like this:
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

// instead of recreating an interface and redeclaring members like this:
interface AddressWithUnit {
  name?: string;
  unit: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

// you can do this instead:
interface AddressWithUnit extends BasicAddress {
  unit: string;
}
// if changes are purely additives