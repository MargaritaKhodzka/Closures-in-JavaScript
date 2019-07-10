// function makeBirdCounter() {
//   var count = 0;
//
//   return function() {
//     count += 1;
//     return count + ' birds';
//   }
// }
//
// function makeDogCounter() {
//   var count = 0;
//   return function() {
//     count += 1;
//     return count + ' dogs';
//   }
// }

let makeCounter = pet => {
  let count = 0;

  return () => {
    count ++;
    return count + ' ' + pet;
  }
}
