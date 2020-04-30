

interface MessageCreator {
    (name:string) : string
};


//With typeDefinition
//type MessageCreator=(name:string) => string
// name:string is parameter
//=> string is return type


function createHelloMessage(name:string) :string {
    return `Hello, my name is ${name}`;
}

const creator: MessageCreator = createHelloMessage;

const message = creator('Bill');

console.log(message);