function Person(name) {
    this.name = name;
    this.sayHi = function () {
        var _this = this;
        setTimeout(function () {
            console.log('Hello ' + _this.name);
        }, 10000);
    };
}
var person = new Person('Bob');
person.sayHi();
