// Cerco gli elementi che mi servono con document.getElementById 
// che mi restituisce un oggetto usando l'id dell'elemento
// e li salvo in variabili  
const lampadina = document.getElementById('lampadina'); 
const interruttore = document.getElementById('interruttore');  

// Aggiungo un event listener all'interruttore che ascolta il click 
// e quando viene cliccato chiama la funzione   
// Aggiungo un event listener al bottone
interruttore.addEventListener('click', function() {
    // Controllo lo stato corrente
    if (interruttore.textContent === 'Accendi') {
        // Cambio immagine e testo per accendere
        lampadina.src = '../img/yellow_lamp.png';
        //textcontent semplicemente cambia il testo
        interruttore.textContent = 'Spegni';
    } else {
        // Cambio immagine e testo per spegnere
        lampadina.src = '../img/white_lamp.png';
        interruttore.textContent = 'Accendi';
    }

    //normale if else
});

//spiegazione esercio e spiegazione delle nuoive funzioni viste in classe (promemoria personale)

// Esercizio 1
// Creare una pagina HTML con un bottone e una lampadina.
// Il bottone deve accendere e spegnere la lampadina.
// La lampadina deve cambiare immagine quando viene accesa o spenta.

//codice js dalle variabili in poi
// Creo due variabili, una per la lampadina e una per l'interruttore
// con document.getElementById ottengo l'elemento con l'id specificato
// e lo salvo nella variabile
// Aggiungo un event listener all'interruttore che ascolta il click
// e quando viene cliccato chiama la funzione
//in che senso ascolta il click? cosa fa quando viene cliccato?
// IN PRATICA QUANDO CLICCHI SULL'INTERRUTTORE, VIENE CHIAMATA LA FUNZIONE CHE CONTIENE IL CODICE PER ACCENDERE O SPEGNERE LA LAMPADINA
// Controllo lo stato corrente dell'interruttore
// Se il testo è 'Accendi'
// Cambio immagine e testo per accenderela lampadina
// Se il testo è 'Spegni'
// Cambio immagine e testo per spegnere la lampadina

//js finiyo
