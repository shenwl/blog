import * as _ from 'lodash';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface Person {
  name: string;
  age: number;
}

function sayName(person: Person): void {
  console.log(_.join(['i am', person.name]));
}

sayName({name: 'allen', age: 21})

function Comp() {
  return (
    <div>Comp</div>
  )
}

ReactDOM.render(<Comp />, document.getElementById('root'));
