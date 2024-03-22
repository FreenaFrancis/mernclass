//simple way to create an object

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
  };


  //object properties
  const per = {
    firstName: "John",
    lastName: "Doe",
  };
  
  console.log(per.firstName); // "John"
  console.log(person.hasOwnProperty("age")); // false
  console.log(Object.keys(per)); // ["firstName", "lastName"]
  console.log(Object.values(per)); // ["John", "Doe"]
  console.log(Object.entries(per)); // [["firstName", "John"], ["lastName", "Doe"]]

  
  //obj mrthods
  const person1 = {
    firstName: "John",
  };
  
  const details = {
    lastName: "Doe",
    age: 30,
  };
  
  Object.assign(person1, details);
  console.log(person1); // { firstName: "John", lastName: "Doe", age: 30 }
  