function Person(name) {
    this.name = name;
}

var person1 = new Person('Sundar');

function Employee(salary) {
    this.salary = salary;
}

Employee.prototype = new Person('xxx');
Employee.prototype.getSalary = function () {
    return this.salary;
}

var emp = new Employee(1000);

class Person {
    constructor(name) {
        this.name = name;
    }
}

class Employee extends Person {
    constructor(salary) {
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}