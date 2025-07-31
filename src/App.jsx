// Crea un form di registrazione con i seguenti campi controllati (gestiti con useState):
// ✅ Nome completo (input di testo)
// ✅ Username (input di testo)
// ✅ Password (input di tipo password)
// ✅ Specializzazione (select con opzioni: "Full Stack", "Frontend", "Backend")
// ✅ Anni di esperienza (input di tipo number)
// ✅ Breve descrizione sullo sviluppatore (textarea)
// Aggiungi una validazione al submit, verificando che:
// Tutti i campi siano compilati
// L'input Anni di esperienza sia un numero positivo
// La Specializzazione sia selezionata
// Al submit, se il form è valido, stampa in console i dati.


// Aggiungere la validazione in tempo reale dei seguenti campi:
// ✅ Username: Deve contenere solo caratteri alfanumerici e almeno 6 caratteri (no spazi o simboli).
// ✅ Password: Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo.
// ✅ Descrizione: Deve contenere tra 100 e 1000 caratteri (senza spazi iniziali e finali).
// Suggerimento: Per semplificare la validazione, puoi definire tre stringhe con i caratteri validi e 
// usare .includes() per controllare se i caratteri appartengono a una di queste categorie:
// Per ciascuno dei campi validati in tempo reale, mostrare un messaggio di errore (rosso) nel caso non siano validi, 
// oppure un messaggio di conferma (verde) nel caso siano validi.

import { useState, useMemo } from 'react';

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,<>?/`~";

function App() {

  const [fullName, setFullName] = useState("Luca"); 
  const [username, setUsername] = useState("LucaIap");
  const [password, setPassword] = useState("Password");
  const [specialization, setSpecialization] = useState("frontend");
  const [experience, setExperience] = useState("1");
  const [description, setDescription] = useState("Sono uno studente Boolean");

  const isUsernameValid = useMemo(() => {                                        // Validazione dell'username
    const charsValid = username.split("").every(char =>                          // verifica se ogni carattere è valido
      letters.includes(char.toLowerCase()) || numbers.includes(char)             // controlla se il carattere è una lettera o un numero
    );
    return charsValid && username.length >= 6;                                   // verifica se la lunghezza è almeno 6 caratteri
  }, [username])                                                                 // dipendenza dall'username

  const isPasswordValid = useMemo(() =>{                                         // Validazione della password
    return(
      password.length >= 8 &&                                                    // verifica se la lunghezza è almeno 8 caratteri
      password.split('').some(char => letters.includes(char)) &&                 // verifica se contiene almeno una lettera
      password.split('').some(char => numbers.includes(char)) &&                 // verifica se contiene almeno un numero
      password.split('').some(char => symbols.includes(char))                    // verifica se contiene almeno un simbol
    )
  }, [password])

  const isDescriptionValid = useMemo(() => {                                     // Validazione della descrizione
    const trimmedDescription = description.trim();                               // rimuove spazi iniziali e finali
    return (
      trimmedDescription.length >= 100 &&                                        // verifica se la lunghezza è almeno 100
      trimmedDescription.length <= 1000 &&                                       // verifica se la lunghezza è al massimo 1000
      !trimmedDescription.startsWith(' ') &&                                     // verifica che non inizi con uno spazio
      !trimmedDescription.endsWith(' ')                                          // verifica che non finisca con uno spazio
    );
  }, [description])                                                              // dipendenza dalla descrizione
    

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !fullName || 
      !username || 
      !password || 
      !specialization || 
      !experience || experience <= 0 ||
      !description
    ) {
      console.log('Per favore, compila tutti i campi.')
      return;
    }
   console.log('Registrazione utente:',
      {
        fullName,
        username,
        password,
        specialization,
        experience,
        description
      }
   );
   
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Nome completo:</p>
          <input 
            type='text' 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)} 
          />
        </label>
        <label>
          <p>Username:</p>
          <input 
            type='text' 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          {username && (
            <p style={{color: isUsernameValid ? "green" : " red"}}>
              {isUsernameValid ? "Username valido" : "Username non valido, deve contenere almeno 6 caratteri e solo lettere o numeri"}
            </p>
          )}
        </label>
        <label>
          <p>Specializzazione:</p>
          <select 
            type='text' 
            value={specialization} 
            onChange={(e) => setSpecialization(e.target.value)} 
          >
            <option value=''>Seleziona specializzazione</option>
            <option value='Full Stack'>Full Stack</option>
            <option value='Frontend'>Frontend</option>
            <option value='Backend'>Backend</option>
          </select>
        </label>
        <label>
          <p>Password:</p>
          <input 
            type='password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
           {password && (
            <p style={{color: isPasswordValid ? "green" : " red"}}>
              {isPasswordValid ? "Password valido" : "Password non valido, deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo"}
            </p>
          )}
        </label>
        <label>
          <p>Esperienze:</p>
          <input 
            type="number" 
            min="0"
            max="50"
            value={experience} 
            onChange={(e) => setExperience(e.target.value)} 
          />
        </label>
        <label>
          <p>Descrizione:</p>
          <textarea
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
           {description && (
            <p style={{color: isDescriptionValid ? "green" : " red"}}>
              {isDescriptionValid ? "Descrizione valida" : "Descrizione non valida, deve contenere almeno 100 caratteri e al massimo 1000, senza spazi iniziali e finali"}
            </p>
          )}
        </label>
        <button type='submit'>Registrati</button>
      </form>
    </div>
  )
  
}

export default App

