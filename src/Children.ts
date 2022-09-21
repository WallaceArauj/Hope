 import  { Pessoa } from "./pessoa"

class Children{
    public analfabeto: boolean;
    public estuda: string;
    idade: number;
    local: string;
    nome: string;
    
    constructor (idade: number, local: string, nome: string, analfabeto: boolean, estuda: string){

        this.analfabeto = analfabeto
        this.estuda = estuda
        this.idade = idade
        this.local = local
        this.nome = nome 


    }


}

export {Children}