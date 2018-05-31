// class Employee {
//     constructor(id, name) {
//         this.id = id;
//         this.name = name;
//     }
//     setName(name) {
//         this.name = name;
//     }
//     getName() {
//         return this.name;
//     }
// }

// Employee emp = new Employee(1, "Sundar");


var empl = {
    id: 0,
    name: null,
    setName: function (newName) {
        this.name = newName;
    },
    getName: function () {
        return this.name;
    }
}

var emp2 = (function () {
    var id = 0;
    var name = null;
    return {
        setName: function (newName) {
            name = newName;
        },
        getName: function () {
            return name;
        }
    }
})();


emp2.getName();
emp2.setName('Sundar');
console.log(emp2.getName());