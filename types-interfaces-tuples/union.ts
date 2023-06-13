
// Union types allow us to create a new type/interface that can have a value of one or a few more types
// using '|' operator 
type Male = {
  name: string;
  beardLength: string;
};

type Woman = {
  name: string;
  braSize: string;
};

type Human = Man | Woman;

// interfaces
interface HouseFly {
  name: "string"
};

interface Bee {
  name: "string"
};

type Insect = HouseFly | Bee;