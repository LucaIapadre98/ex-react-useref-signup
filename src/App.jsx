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
import React, { useState } from 'react';

function App() {

  const [fullName, setFullName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState();
  const [description, setDescription] = useState('');

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
          <p>Nome:</p>
          <input 
            type='text' 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
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
        </label>
        <button type='submit'>Registrati</button>
      </form>
    </div>
  )
  
}

export default App

