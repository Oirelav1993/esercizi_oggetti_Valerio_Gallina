// ESERCIZIO 1
// Realizzare un oggetto che rappresenti un garage, dovrà contenere una lista di automobili. Ciascuna automobile dovra’ avere una marca (es. Fiat) ed una lista di modelli (es. Pandino tattico rosso bello come Charizard).
// Scrivere un metodo che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.


let garage = {
            cars : [
                {"marca" : "Fiat" , "modelli" : ["Croma","Dino","Abarth","Doblo"]},
                {"marca" : "Opel" , "modelli" : ["Agila","Zafira","Frontera","Meriva"]},
                {"marca" : "Peugeot" , "modelli" : ["Bipper","Boxer","1007","607"]},
                {"marca" : "Renault" , "modelli" : ["Alaskan","Laguna","Mégan","R5"]},
                {"marca" : "Alpha Romeo" , "modelli" : ["Giulietta","Brera","Spider","147"]},
            ],
    cercaAuto : function (marchio){
        let check = false
            this.cars.forEach((car)=>{
                if (car.marca.toLowerCase() == marchio.toLowerCase()){
                    console.log(`I modelli della marca ${car.marca} sono: ${car.modelli}.`),
                    check = true
                }
            })
        if (!check){
            console.log(`Mi dispiace non ci sono macchine di questa marca!`)
        }

        }
    }             


garage.cercaAuto("fiat")
// garage.cercaAuto("Alpha Romeo")
// garage.cercaAuto("Peugeot")