var person = {
  firstName: 'Nicholas',
  lastName: 'Cardoza',
  hobby: 'Archery'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's full name is:", fullName);

person.job = 'Crushing IT whoop whoop !!!!!';
console.log('My current job is:', person.job);

person.previousJob = 'Metal Fabrication and Design';
console.log('My previous job was:', person.previousJob);

console.log('I am a complete person inside an object:', person);
