import { useState } from "react";
import './App.css';
import Contacts from "./components/Contacts";
import contactsData from "./contacts.json"
 

function App() {
  const [contacts, setContacts] = useState(contactsData); 

  const displayContacts = () => {
    return (
      contacts.map((contact) => {
        return (
          <Contacts key={contact.id}
            {...contact}
          />
        )
      })
    )
  }

  return <div className="App">
    <h1>Iron Contacts</h1>
    <div className="bar">    
      <h2>Picture</h2>
      <h2>Name</h2>
      <h2>Popularity</h2>
      <h2>Won Oscar</h2>
      <h2>Won Emmy</h2>
    </div>
    {
      displayContacts()
    }
  </div>;
  
}

export default App; 
