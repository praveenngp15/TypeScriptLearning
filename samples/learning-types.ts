function userName(name?:string) :string | undefined{
    if(name){
        return name;
    }

    return undefined

}


console.log(userName('Praveen'))