enum PlayerPosition{
    Guard,
    Forward,
    Center
}

type Player=[string,PlayerPosition]

let kobe:Player=["Kobe",PlayerPosition.Guard]
let kevin:Player=["Kevin",PlayerPosition.Center]
let john:Player = ["John",PlayerPosition.Forward]

let players: Player[] =[kobe,kevin,john]

console.log(players)