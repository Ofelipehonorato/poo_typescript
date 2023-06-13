import { Celular } from "./models/Celular";

let iphone13 = new Celular();
iphone13.capacidadeMemoriaInterna = 128;
iphone13.marca = "Apple";
iphone13.modelo = "iPhone13";
iphone13.tipo = "Smartphone";
iphone13.qualidadeCamera = 12;
iphone13.bateria = 80
iphone13.ligacao(true)
iphone13.ligacao(false)

// let redmiNote12 = new Celular();
// redmiNote12.capacidadeMemoriaInterna = 256
// redmiNote12.marca = "Xiaomi"
// redmiNote12.modelo = "Redmi Note 12"
// redmiNote12.tipo = "Smartphone"
// redmiNote12.qualidadeCamera = 200
// console.log(redmiNote12)

// iphone13.fazerLigacao(44991841032)
// redmiNote12.fazerLigacao(192)

import { Animal} from "./models/Animal"
let cachorro = new Animal()
cachorro.nome = "Pingo"
cachorro.cor = "Branco"
cachorro.raca = "Vira-Lata"
cachorro.peso = 8
cachorro.idade = 12

// cachorro.emitirSom("Auuuuuuuuuu")
// cachorro.andar(123)