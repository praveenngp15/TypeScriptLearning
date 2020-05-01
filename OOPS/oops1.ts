enum Editor{
    MARVEL,
    DC
}


class SuperHero{

    constructor(public name:string,public editor:Editor,public year?:number){

    }

}

const a:SuperHero = new SuperHero("Praveen",Editor.MARVEL,2015);
console.log(`superHero${a.name} 
${Editor[a.editor]}

${a.year}`)