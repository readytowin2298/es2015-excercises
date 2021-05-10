import {choice, remove} from './helpers.js';
import foods from './foods.js';

const fruit = choice(foods);
const fruitsLeft = remove(foods, fruit)

console.log(`I’d like one ${fruit}, please.`);
console.log(`Here you go: ${fruit}.`);
console.log(`DELICIOUS. May I have another?`);
console.log(`I’m sorry, we’re all out. We have ${fruitsLeft} left.`)