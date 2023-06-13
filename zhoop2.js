// get route
function getRoute(tickets) {
  let ticketsMap = new Map(tickets);
  let destinations = [...ticketsMap.values()];

  let itinerary = [...ticketsMap.entries()].filter(
    arr => destinations.indexOf(arr[0]) === -1
  )[0];

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