function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: "Anderson",
  lastName: "Kaiti",
  age: 20,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = "OIE";
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

// os valores do objeto criado com a função construtora Person estão fazendo shadowing nos valores do prototype e o objeto consegue utilizar o método fullName(). Caso a função construtora não tenha o this.firstName = firstName, por exemplo, o valor de firstName utilizado será o do prototype
const person1 = new Person("João", "Kaiti", 20);
console.log(person1);
console.log(person1.fullName());

const person2 = new SubPerson("Helena", "Vieira", 20);
console.log(person2);
console.log(person2.fullName());
