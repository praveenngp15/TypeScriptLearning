class sports{
    constructor(private a:string){

    }
    message(){
        console.log('a' + this.a)
    }


    set SportsNnname(nn: string) {
        this.a = nn;
    }
}


const sp = new sports('cricket');

console.log(sp.message())
sp.SportsNnname('Football');
