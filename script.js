//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// -il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.




// 1 Chiediamo all'utente il numero di km di dovrà percorrere.
const km = Number(prompt ("Quanti km vuole percorrere?"));
console.log(km)

// Chiediamo l'età del passeggero.
const userAge = Number(prompt ("Inserisci la tua età"));
console.log(userAge)

//Calcoliamo il prezzo del biglietto senza sconto in base ai km (0,21€ * km)
const priceForKm = km * 0.21;
console.log(priceForKm.toFixed(2),"€" ) 

//Controllo dell'età per un eventuale sconto
const ticketYoung = priceForKm * 0.2
const ticketSenior = priceForKm * 0.4
let   ticketPrice

//Calcoliamo il prezzo del biglietto con il 20% se è un minorenne
if(userAge < 18){
    
    
    console.log("lo sconto è di:",ticketYoung.toFixed(2),"€" )
    ticketPrice= priceForKm - ticketYoung
    console.log("il prezzo scontato è: ",ticketPrice.toFixed(2),"€" )

    alert(`Ìl prezzo da pagare è ${ticketPrice.toFixed(2)}€ con un 20% di sconto ` )
}

//Calcoliamo il prezzo del biglietto con il 40% se è un over 65
else if (userAge >= 65) {

    console.log("lo sconto è di:",ticketSenior.toFixed(2),"€" )
    ticketPrice= priceForKm - ticketSenior
    console.log("il prezzo scontato è: ",ticketPrice.toFixed(2),"€" )

    alert(`Ìl prezzo da pagare è ${ticketPrice.toFixed(2)}€ con un 20% di sconto ` )
}

//Prezzo base del biglietto del passeggero
else {

    console.log("nessuno sconto")
    alert(`Il prezzo da pagare è ${priceForKm.toFixed(2)}€ `)

}

