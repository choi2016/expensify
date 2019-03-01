//
// Object Destructuring
//

// const person = {
//     name: 'Haru',
//     age: 4,
//     location: {
//         city: 'San Francisco',
//         temp: 55
//     }
// }

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age} years old.`)

// const { city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} degrees in ${city}.`)
// }

//EXAMPLE

// const book = {
//     title: 'Book Title',
//     author: 'AUTHOR',
//     publisher: {
//         name: 'Pengiun'
//     }
// };

// const { name: publisherName = 'self-published' } = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

const address = ['314 Pi Street', 'Los Angelas', 'California', '41256'];
const [, city, state = 'Matrix'] = address;
console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [items, ,medium] = item;
console.log(`A medium ${items} costs ${medium}.`);