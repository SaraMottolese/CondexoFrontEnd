# Condexo Front End

Questa applicazione è stata progettata per poter gestire la registrazione di un nuovo utente al portale di Condexo tramite l'uso di HTML5, CSS, Typecript e la libreria Bootstrap.

## Contenuti
- [Oggetti e Interfacce](#Oggetti-e-Interfacce)
- [Metodi](#Metodi)
- [CSS](#CSS)
- [License](#License)

## Oggetti e Interfacce

Un oggetto User è così composto: 
- Name (non può essere null)
- Surname (non può essere null)
- Address (non può essere null)
- ZipCode 
- UserType (non può essere null)
- Email (non può essere null)
- PhoneNumber
- Genre
- Password (non può essere null)
- Age

## Metodi

- CheckName(): se il campo nome risulta vuoto o null viene generato un nuovo tag h6 che indica che quel campo è obbligatorio, altrimenti in console viene stampato il nome del nuovo user. Inoltre il contatore di validità del form viene aumentato di 1.

- CheckSurname(): se il campo cognome risulta vuoto o null viene generato un nuovo tag h6 che indica che quel campo è obbligatorio, altrimenti in console viene stampato il cognome del nuovo user. Inoltre il contatore di validità del form viene aumentato di 1.

- CheckAddress(): se il campo indirizzo risulta vuoto o null viene generato un nuovo tag h6 che indica che quel campo è obbligatorio, altrimenti in console viene stampato l'indirizzo del nuovo user. Inoltre il contatore di validità del form viene aumentato di 1.

- CheckUserType(): se il campo tipo di user risulta vuoto o null viene generato un nuovo tag h6 che indica che quel campo è obbligatorio, altrimenti in console viene stampato il tipo di utente. Inoltre il contatore di validità del form viene aumentato di 1.

- CheckEmail(): se il campo email risulta vuoto o null viene generato un nuovo tag h6 che indica che quel campo è obbligatorio, è presente anche un secondo controllo sulla validità dell'indirizzo tramite un controllo tramite regex. Nel caso in cui i due controlli risultassero validi allora verrebbe stampato l'indirizzo email in console. Inoltre il contatore di validità del form viene aumentato di 1.

- CheckPassword(): se il campo poassword risulta vuoto o null viene generato un nuovo tag h6 che indica che quel campo è obbligatorio, è presente anche un secondo controllo sulla validità della password (deve contenere almeno una lettera maiuscola, almeno una lettera minuscola, solo caratteri alfanumerici e deve essere lunga almeno 16 caratteri) tramite un controllo tramite regex. Nel caso in cui i due controlli risultassero validi allora verrebbe stampata la password in console. Inoltre il contatore di validità del form viene aumentato di 1.

- save(): funzione che richiama al suo interno le funzioni sopra descritte per far si che i controlli avvengano al click del tasto submit, stampa in console i campi non obbligatori, se il contatore è uguale a 6 (il che significa che tutti i campi obbligatori sono stati compilati) allora si aprirà un modale che ci avverte che la registrazione è avvenuta con successo


## CSS

- Icona info:
  - hover passando sopra all'icona i di fianco a password l'icona vibra e si colora di verde
  - onclick si apre un modale che spiega come deve essere la password per far si che sia valida

- Tasto submit:
  - hover: la scritta da nera diventa bianca
  - onclick oltre alle funzioni sopra descritte si apre un modale che conferma la registrazione ed è presente un'icona che oscilla.

## License

MIT ©
