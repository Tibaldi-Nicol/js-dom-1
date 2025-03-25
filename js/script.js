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
        interruttore.textContent = 'Spegni';
    } else {
        // Cambio immagine e testo per spegnere
        lampadina.src = '../img/white_lamp.png';
        interruttore.textContent = 'Accendi';
    }
});

