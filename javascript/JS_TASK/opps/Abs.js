function Employee(name, age, salary) {

    let baseSalary = 20000;
    let monthlySalary =1000;
    this.name = name;
    this.age = age;
    this.salary = salary;
    // this.baseSalary = 50000;
    // this.monthlySalary = 1000;
  
    // this.calculateFinalSalary = () => {
    //   this.finalSalary = this.baseSalary + this.monthlySalary;
    //   console.log('The final salary: ' + this.finalSalary);
    // };
    this.calculateFinalSalary = () => {
      let  finalSalary = baseSalary + monthlySalary;
        console.log('The final salary: ' + this.finalSalary);
      };
    this.employeeDetails = function() {
      console.log('Name: ' + this.name + ', Age: ' + this.age + ', Salary: ' + this.salary);
    };
  }
  
  let emp1 = new Employee('Freena', 2, 234545445);
  emp1.employeeDetails();
  emp1.calculateFinalSalary();
  emp1.baseSalary = 2000;
console.log(emp1.baseSalary); // undefined
console.log(emp1.monthlySalary)
  