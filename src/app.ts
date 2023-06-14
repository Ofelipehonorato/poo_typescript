import { Celular } from "./models/Celular";
import { Aplicativo } from "./models/Aplicativo";

// let iphone13 = new Celular("Apple", "iPhone13", 128, 12, "Smartphone", 100);

// console.log(`A bateria esta em ${iphone13.bateria}%`)
// iphone13.ligacao()
// console.log(`A bateria esta em ${iphone13.bateria}%`)
// iphone13.fotografar()
// console.log(`A bateria esta em ${iphone13.bateria}%`)

let instagram = new Aplicativo("Instagram", 100);

let facebook = new Aplicativo("Facebook", 200);

let camera = new Aplicativo("Camera", 50);

iphone13.instalarAplicativo(instagram)
iphone13.instalarAplicativo(facebook)
iphone13.instalarAplicativo(camera)
console.log(iphone13)



// iphone13.ligacao(true)
// iphone13.fotografarInternet(true)

// let redmiNote12 = new Celular();
// redmiNote12.capacidadeMemoriaInterna = 256
// redmiNote12.marca = "Xiaomi"
// redmiNote12.modelo = "Redmi Note 12"
// redmiNote12.tipo = "Smartphone"
// redmiNote12.qualidadeCamera = 200
// console.log(redmiNote12)

// iphone13.fazerLigacao(44991841032)
// redmiNote12.fazerLigacao(192)

// import { Animal} from "./models/Animal"
// let cachorro = new Animal("Apolo", "Branco", "Vira-lata", 10)

// console.log(cachorro)


// cachorro.emitirSom("Auuuuuuuuuu")
// cachorro.andar(123)

