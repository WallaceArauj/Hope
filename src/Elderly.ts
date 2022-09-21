import { Pessoa } from  "./pessoa";
import { Itemcpf } from  "./Itemcpf";
import { ItemFilhos } from  "./ItemFilhos";



class Elderly extends Pessoa implements Itemcpf, ItemFilhos{
    public filhoI: number;
    public cpfI: number;
    

    
    constructor(idade: number, local: string, nome: string, nivelDeEscolaridade: string, filhoI: number,
         cpfI:number){

        super(idade, local, nome, nivelDeEscolaridade );
        

        this.filhoI = filhoI;
        this.cpfI = cpfI;
        


    }
    cpf(): void {
        console.log(`CPF: ${this.cpfI}`);
    }
    
    filhos(): void{
        console.log(`O ${this.nome} tem ${this.filhos} filhos.`)
   

    }
}


export {Elderly}