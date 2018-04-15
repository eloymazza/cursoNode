let agumon = {
    ataque: 70,
    defensa: 30,
    velocidad: 50,
    getAtaque(){
        return this.ataque;
    }
}
let patamon = {
    ataque: 40,
    defensa: 40,
    velocidad: 50,
    getAtaque(){
        return this.ataque;
    }
}
let { defensa: defensaA} = agumon;
let { defensa: defensaB} = patamon;
console.log(defensaA,defensaB);




