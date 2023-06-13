
- In TypeScript, we can easily extend and implement interfaces. This is not possible with types though.
- Interfaces in TypeScript can extend classes
- classes implement interfaces
- interface can be declared twice in the same place without error
- type can be created through new intersection combining interfaces, interfaces cannever by combinging types.
- With interfaces, we could use an extends clause to extend from other types

# Tuples
A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.

function doSomething(pair: [string, number]) {
  const a = pair[0]; // const a: string

    const b = pair[1]; // const b: number
  // ...
}
 
doSomething(["hello", 42]);