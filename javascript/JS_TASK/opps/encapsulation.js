// function createPerson(name, age) {
//     let _name = name;
//     let _age = age;
  
//     return {
//       getName: function() {
//         return _name;
//       },
//       setName: function(newName) {
//         _name = newName;
//       },
//       getAge: function() {
//         return _age;
//       },
//       setAge: function(newAge) {
//         if (newAge >= 0) {
//           _age = newAge;
//         }
//       },
//     };
//   }
  
//   const person = createPerson("John", 30);
//   person.setAge(-5); // This will not update the age because of the validation in the setter method
//   console.log(person.getAge()); // Outputs: 30
  


class Employee{
    setEmpDetails(name,id,phone){
this.name= name;
this.id = id;
this.phone = phone;
    }
    getEmpName(){
        return this.name;
     }
     getEmpId(){
        return this.id;
     }
     getEmpPhone(){
        return this.phone;
     }
}

// Creating an instance of the Employee class
const employee1 = new Employee();

// Setting employee details using the setEmpDetails method
employee1.setEmpDetails("John Doe", 12345, "555-123-4567");

// Getting employee details using the getEmpName, getEmpId, and getEmpPhone methods
console.log("Employee Name:", employee1.getEmpName());
console.log("Employee ID:", employee1.getEmpId());
console.log("Employee Phone:", employee1.getEmpPhone());
