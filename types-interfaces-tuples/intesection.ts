// Intersection allows us to combine multiple types/interface into a single one type
type Name = {
  name: string;
};

type Age = {
  age: number;
};

type Details = Name & Age;

// interfaces
interface House {
  buildingNumber: number;
  houseName: string;
};

interface Street {
  name: string
}

//type can be created through new intersection combining interfaces, interfaces can never by combinging types.
type Address = House & Street;

// With interfaces, we could use an extends clause to extend from other types
interface Details2 extends Name, Age, Address{
  Bio: string;
}

// The principle difference between the Address and Details2 intersection is how conflicts are handled, 
// and that difference is typically one of the main reasons why you’d pick one over the other between an interface and a type alias of an intersection type.
