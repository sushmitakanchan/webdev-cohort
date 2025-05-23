function Employee(name, position, salary) {
    // Initialize name, position, and salary properties
    this.name = name;
    this.position = position;
    this.salary = Number(salary)
}

// Define applyBonus method on Employee's prototype
Employee.prototype.applyBonus= function(percent){
    // let incrementedSalary  = 0;
    // let bonus = Math.round(this.salary * (percent/100));
    // incrementedSalary = this.salary + bonus;
    // return incrementedSalary;

    this.salary = Math.round(this.salary + this.salary*(percent/100))
    return this.salary
   

}

const e1 = new Employee("Sush","Senior Developer", "60000");
console.log(e1.applyBonus(5));
