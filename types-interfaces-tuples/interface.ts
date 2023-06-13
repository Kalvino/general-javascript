// interface can be declared multiple times in the same place without error
// Declaration merging does work with interface
interface Point {
  x: number;
  y: number;
  distance(other: Point): number;
}

interface Point {
  x: number;
  y: number;
  distance(other: Point): number;
}

// types cannot be declared multiple times in the same place without error
// Declaration merging does not work with types - Duplicate error is thrown
type Pin = {
  x: number;
  y: number;
  distance(other: Pin): number;
}

type Pin = {
  x: number;
  y: number;
  distance(other: Pin): number;
}