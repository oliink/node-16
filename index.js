const Phonebook = require('./phonebook');

let person1 = new Phonebook();

person1.setName('Ivan');
person1.setSurname('Ivanov');
person1.setNumber('+380666666666');


let person2 = new Phonebook('Petr', 'Petrov', '+380999999999');

console.log(person1.getInfo());
console.log(person2.getInfo());