// Criar uma classe para que a partir dela seja possível instanciar animais. Um animal deve ter um nome, cor, raça, peso, idade. Além dessas características, um animal deve emitir sons e se locomover.

export class Animal{
  nome: string;
  cor: string;
  raca: string;
  peso: number;
  idade: number;

  emitirSom(som: string){
    console.log(`O animal ${this.raca} emite esse som: ${som}`)
  }

  andar(passos: number){
    console.log(`O animal ${this.nome} da ${this.raca} andou o total de ${passos}`)
  }
}