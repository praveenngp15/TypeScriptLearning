function Person(name){

    this.name = name;

    this.sayHi = function(){

        setTimeout( ()=>{
            console.log('Hello ' + this.name)

        },10000)
    }
}

const person = new Person('Bob');

person.sayHi();