class hero{
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(nome,idade,tipo){
        if(tipo === "guerreiro"){
            console.log(`O usuário ${nome}, cuja idade é ${idade}, tem um personagem do tipo ${tipo} que atacou usando espada`)
        }else if (tipo === "mago"){
            console.log(`O usuário ${nome}, cuja idade é ${idade}, tem um personagem do tipo ${tipo} que atacou usando magia`)
        }else if (tipo === "monge"){
            console.log(`O usuário ${nome}, cuja idade é ${idade}, tem um personagem do tipo ${tipo} que atacou usando artes marciais`)
        }else if (tipo === "ninja"){
            console.log(`O usuário ${nome}, cuja idade é ${idade}, tem um personagem do tipo ${tipo} que atacou usando shuriken`)
        }
    }
}

let nome = "Richard"
let idade = 20
let tipo = "mago"
let personagem = new hero(nome,idade,tipo)

personagem.atacar()