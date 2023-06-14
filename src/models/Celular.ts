import { Aplicativo } from "./Aplicativo";

export class Celular{
  marca:string;
  modelo: string;
  capacidadeMemoriaInterna: number;
  qualidadeCamera: number;
  tipo: string;
  bateria: number;
  status: boolean;
  aplicativos: Aplicativo [];

  constructor (
    marca:string,
    modelo: string,
    capacidadeMemoriaInterna: number,
    qualidadeCamera: number,
    tipo: string,
    bateria: number,
    status: boolean,
    aplicativos: Aplicativo []
  ){

    this.status = false
    this.marca = marca
    this.modelo = modelo
    this.capacidadeMemoriaInterna = capacidadeMemoriaInterna
    this.qualidadeCamera = qualidadeCamera
    this.tipo = tipo
    this.bateria = bateria
    this.aplicativos = aplicativos
  }
  
  ligacao(){
    let consumoBateria = 2
    if(this.temBateria()){
      console.log(`Efetuando ligação...`)
      this.reduzirBateria(consumoBateria)
    }
  }
  
  fotografar(){
    let consumoBateria = 5
    if(this.temBateria()){
      console.log("Fotografando...")
      this.reduzirBateria(consumoBateria)
    }
  }

  temBateria():boolean {
    return this.bateria > 0
  }

  reduzirBateria(consumo: number){
    return this.bateria -= consumo
  }

  instalarAplicativo(aplicativo: Aplicativo){
    this.aplicativos.push(aplicativo)
  }

  capacidadeMemoria(aplicativo: Aplicativo){
    let memoriaUtilizada = 0

    for (const app of this.aplicativos) {
      memoriaUtilizada += app.tamanhoEmMegaBytes
    }
    return (
      aplicativo.tamanhoEmMegaBytes + memoriaUtilizada >= this.capacidadeMemoriaInterna
    )
  }
  // consumoMemoria(aplicativo: Aplicativo){
  //   if (this.capacidadeMemoria < this.aplicativo)
  // }
  
}

