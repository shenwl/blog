interface Person {
  name: string;
  age: number;
}
function sayName(person: Person): void {
  console.log('i am' + person.name);
}

sayName({name: 'allen', age: 21})
