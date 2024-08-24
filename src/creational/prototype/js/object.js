const personPrototype = {
  firstName: "Anderson",
  lastName: "Kaiti",
  age: 20,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
// o objeto é vazio, então ao chamar a propriedade firstName, o JavaScript delegará essa chamada para o prototype
// ao adicionar a propriedade firstName ao objeto anotherPerson, ela faz shadowing na propriedade do prototype
anotherPerson.firstName = "Joana";
console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());
