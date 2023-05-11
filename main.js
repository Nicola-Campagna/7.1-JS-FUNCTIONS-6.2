// tabella 
const gridEl = document.getElementById("tabella");
// numero caselle di gioco
const dimensionGrid = 64;

// invochiamo la funzione per creare la tabella
generateGrid(gridEl, dimensionGrid);



/**********************************
 *         FUNCTIONS
 **********************************/

/**
 * funzione che genera una tabella di gioco con le rispettive caselle
 * @param {HTMLElement} grid valore che andrà a generare la griglia di gioco
 * @param {int} dimension valore che indica il numero di caselle
 */


function generateGrid(grid, dimension) {
    // creo un div che sarà la mia casella
    const cella = document.createElement("div");
    // aggiungo la classe "square" in css 
    cella.classList.add("square")
    // appendo la casella alla tabella
    grid.append(cella);

}