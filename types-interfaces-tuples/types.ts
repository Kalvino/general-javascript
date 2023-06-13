type Vertex = {
  x: number;
  y: number;
  distance(other: Vertex): number;
}

interface Loc extends Vertex {
  name: string;
}