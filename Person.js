var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.printName = function () {
        console.log(this.name + " " + this.age);
    };
    return Person;
}());
//# sourceMappingURL=Person.js.map