export class Celular{
  marca:string;
  modelo: string;
  capacidadeMemoriaInterna: number;
  qualidadeCamera: number;
  tipo: string;
  bateria: number;

  ligacao(numero: boolean){

    if(numero == true){ 
      console.log(`Após a ligação a batéria esta com${this.bateria - 1}%`)
    } else {

      console.log(`A batéria esta com ${this.bateria}%`)
    }
  }

  fotografarInternet(condicao: boolean){
    if(condicao == true){
      console.log(`A batéria esta com ${this.bateria - 2}%`)
    }
    console.log(`A batéria esta com ${this.bateria}%`)
  }
}

