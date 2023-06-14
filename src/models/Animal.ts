

export class Animal{
  nome: string;
  cor: string;
  raca: string;
  peso: number;
  idade: number;
  dataNascimento: Date;

  constructor(
    nome:string,
    cor:string,
    raca:string,
    peso:number,
    idade?:number )
    {
    this.nome = nome
    this.cor = cor
    this.raca = raca
    this.peso = peso
    this.dataNascimento = new Date()
    if(idade){
      this.idade = idade
    } else {
      this.idade = 0  
    }
  }

  emitirSom(som: string){
    console.log(`O animal ${this.raca} emite esse som: ${som}`)
  }

  andar(passos: number){
    console.log(`O animal ${this.nome} da ${this.raca} andou o total de ${passos}`)
  }
}