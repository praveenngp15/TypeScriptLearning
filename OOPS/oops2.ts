class SuperMan{

    constructor(public age:number){

    }

    static displayAge(m:SuperMan){

         console.log('age is' + m.age)
    }
}

class SuperHeros extends SuperMan  {


    get message():number{
        return this.age
    }

    set ageing(agea:number){
        this.age=agea;
    }


}


const aa = new SuperHeros(9)
console.log(SuperMan.displayAge(aa))