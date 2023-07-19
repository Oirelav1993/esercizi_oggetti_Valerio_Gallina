// ESERCIZIO 2
// Ricreare un oggetto bowling con una proprietà che comprenda una lista di giocatori con un nome e i relativi punteggi, ed abbia diverse funzionalità tra cui:

// -creare 10 punteggi casuali per ogni giocatore:

// Suggerimento: questo metodo dovrà ciclare tutti i giocatori presenti nell’oggetto bowling, e aggiungere ad ogni proprietà scores, dieci punteggi casuali ad ogni giocatore

// Utilizzare l’istruzione per generare un punteggio casuale da 1 a 10: Math.floor(Math.random() * (10 - 1 +1) + 1)

// -trovare il punteggio finale per ogni giocatore:
// -aggiungere un nuovo giocatore
// -determinare il vincitore

// Dati di partenza:
// let bowling = {
//     'players': [
//         {'name': 'Nome1', 'scores': []},
//         {'name': 'Nome2', 'scores': []},
//         {'name': 'Nome3', 'scores': []},
//         {'name': 'Nome4', 'scores': []}
//     ],
//     ...
// }

let bowling = {
    players: [
        {'name': 'Valerio', 'scores': []},
        {'name': 'Andrea', 'scores': []},
        {'name': 'Giorgia', 'scores': []},
        {'name': 'Mattia', 'scores': []}
    ],


    setScore : function(){

       this.players.forEach((player) =>{
        for (let i =1 ; i <= 10; i++){
            player.scores.push(Math.floor(Math.random() * (10 - 1 +1) + 1));
        }
        }) 
    },


    setFinalScore : function () {

        this.players.forEach((player)=>{
                player.sommaScore = player.scores.reduce((acc,score) => acc + score);
        })    
    },


    addNewPlayer : function (newName){

        this.players.push({'name': newName, 'scores': []},)
    },


    setWinner : function (){
        let vincitore = this.players[0]
        this.players.forEach ((player)=>{
            if (player.sommaScore > vincitore.sommaScore){
                vincitore = player     
            }
        });
        console.log(`Il vincitore è ${vincitore.name} con un punteggio di ${vincitore.sommaScore}`)
    }
    
}


bowling.addNewPlayer('Davide');
bowling.addNewPlayer('Simona');
bowling.addNewPlayer('Angelo');
bowling.setScore();
bowling.setFinalScore();
bowling.setWinner();

console.log(bowling);