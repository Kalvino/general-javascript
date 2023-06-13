export default dataStore = ()=>{
  const tables = {
    customers: {
      1: {name: 'Calvin'},
      2: {name: 'Kagendo'},
      3: {name: 'Jeje'}
    },
    foods: {
      1: ['ugali','njugu'],
      2: ['cake','waffles'],
      3: ['bones','liver']
    }
  };

  return {
    get:(table,id) => tables[table][id]
  }
}