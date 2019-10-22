import * as _ from 'lodash';

interface Person {
  name: string;
  age: number;
}

function sayName(person: Person): void {
  console.log(_.join(['i am', person.name]));
}


sayName({name: 'allen', age: 21})
