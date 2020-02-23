import { forOrder } from './flightOfferBuilder';

let test = forOrder('abc')
  .forOffer('1')
    .seat('1', 'A1')
    .seat('2', 'A2')
  .ok()
  .build()

console.log('Test');
console.log(test);

