// get route
function getRoute(tickets) {
  let ticketsMap = new Map(tickets);
  let destinations = [...ticketsMap.values()];

  let itinerary = [...ticketsMap.entries()].find(
    arr => destinations.indexOf(arr[0]) === -1
  );

  ticketsMap.delete(itinerary[0]);

  for (let i = 0; i < ticketsMap.size; i++) {
    let lastDeparture = itinerary[i + 1];
    let nextDestination = ticketsMap.get(lastDeparture);
    itinerary.push(nextDestination); // OR itinerary = [...itinerary, nextDestination]; 
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

console.log(getRoute(tickets));

