enum PlayerPosition{
    Guard,
    Forward,
    Center
}

interface Player{
    name:string,
    playerPos:PlayerPosition;
}

let kevin: Player | null ={
    name : "Kevin",
    playerPos : PlayerPosition.Guard
}


kevin = null;
