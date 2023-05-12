

## Struttura del Progetto
Il progetto è organizzato in modo da avere un layout principale con un header, un main e un footer. All'interno del main, abbiamo due sezioni chiamate `main` e `main-2`. Inoltre, abbiamo un file `menus.js` che gestisce le cards. 

### Header
L'header contiene il logo e il menu di navigazione del sito. 

### Main
Il componente `main` è il contenitore principale che ospita tutti i componenti delle card. All'interno del `main` ci sono due sezioni: `main` e `main-2`, ciascuna delle quali contiene diversi tipi di card.

### Footer
Il footer contiene le informazioni di contatto e i link ai social media.

## Componenti delle Card
Abbiamo tre tipi di card nel progetto: `card`, `autocard2` e `autocard4`. 

### Card
Il componente `card` è una card di base con un'immagine, un titolo e un testo. 

### Autocard2
Il componente `autocard2` è una card più complessa con un'immagine, un'icona a forma di cuore che può essere cliccata per segnare la card come preferita, e diverse informazioni come il nome, il tipo, il prezzo, la marca e il carburante dell'auto.

### Autocard4
Il componente `autocard4` è simile all'`autocard2` ma presenta alcune differenze nel layout e nelle informazioni visualizzate. Oltre all'immagine, mostra il numero di telefono, una domanda e un testo.

## Menus.js
Il file `menus.js` gestisce le cards. Queste card sono utilizzate nel menu di navigazione per mostrare le diverse categorie di auto disponinili.

## FontAwesome
FontAwesome è utilizzato in tutto il progetto per fornire icone vettoriali e loghi di social media. È integrato nel progetto tramite il pacchetto `@fortawesome/vue-fontawesome`.

