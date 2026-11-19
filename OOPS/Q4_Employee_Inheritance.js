class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

class Manager extends Employee {
    work() {
        return `${this.name} manages the ${this.department} department and guides the team.`;
    }
}

const employees = [
    new Employee("Aman", "Development"),
    new Manager("Riya", "Sales")
];

employees.forEach(employee => {
    console.log(employee.work());
});

console.log("Runtime polymorphism: The same work() method call produces different results depending on the object's class.");
