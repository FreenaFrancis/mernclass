class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
  
    getSalary() {
      console.log("Salary of " + this.name + " is " + this.salary);
    }
  }

  class Manager extends Employee{
    
  }
  
  // Create an instance of the Employee class
  let em = new Employee("John", "HR", 5000);
  
  // Call the getSalary method
  em.getSalary(); // Output: "Salary of John is 5000"
  console.log(em.name);