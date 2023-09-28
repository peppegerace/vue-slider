Vue Slider
===
Partendo dall'esercizio js-array-objects-carousel, ricreare lo slider con vue, aggiungendo la funzionalità al click delle thumb di riprodurre in grande l'immagine corrispondente.

1. Creo il contenitore della nostra app.

2. Salvo in una variabile globale la funzione createApp.

3. Richiamo la funzione

4. Definisco i dati all'interno del metodo data()

5. Ciclo l'inserimento dei dati

6. Creo la funzione per far scorrere le immagini e la funzione per riprodurre in grande le immagini cliccate nella thumb.

7. Metto in ascolto i bottoni e le immagini nella thumb

        a. al click del bottone next:
            - aggiungo classe active
            - incremento il contatore
            - tolgo la classe active
        
        b. al click del bottone prev:
            - aggiungo classe active
            - decremento il contatore
            - tolgo la classe active

        c. al click sulle immagini nella thumb
            - aggiungo classe active all'immagine cha ha lo stesso indice dell'immagine cliccata
            

