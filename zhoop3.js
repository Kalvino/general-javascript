// get route
function getRoute(tickets) {
  let ticketsMap = new Map(tickets);
  let destinations = [...ticketsMap.values()];

  itineIterator = ticketsMap.entries();
  let itine = itineIterator.next();
  console.log(itineIterator.done)

  while (!itineIterator.done){
    trip = itine.next().value
    console.log(trip);

  }

  let itinerary = [...ticketsMap.entries()].find(
    arr => destinations.indexOf(arr[0]) === -1
  );
  console.log(itinerary)

  ticketsMap.delete(itinerary[0]);

  for (let i = 0; i < ticketsMap.size; i++) {
    let lastDeparture = itinerary[i + 1];
    let nextDestination = ticketsMap.get(lastDeparture);
    itinerary.push(nextDestination);
  }
  return itinerary.join();
}

// run in your terminal with Node.js installed: e.g
// $ node zhoop.js

const tickets = [
  ['JPN', 'PHL'],
  ['BRA', 'UAE'],
  ['USA', 'BRA'],
  ['UAE', 'JPN']
]

console.time();
console.log(getRoute(tickets));
console.timeEnd();
