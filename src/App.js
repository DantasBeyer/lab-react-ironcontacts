import { useState } from "react";
import './App.css';
import Contacts from "./components/Contacts";
import contactsJson from "./contacts.json"
 

function App() {
  const [contacts, setContacts] = useState(contactsJson.slice(0,5));
 
// btn functions
  const btnAddContact =()=> {
    const getContact = [...contacts];
    const newContact = contactsJson [Math.floor(Math.random()* contactsJson.length)];
    if(contacts.indexOf(newContact) === -1){
      getContact.push(newContact);
  }
    setContacts(getContact)
  }

  const btnSortBypopularity =()=>{
    const getContact = [...contacts];
    setContacts(getContact.sort((contact1, contact2) => contact1.popularity - contact2.popularity));
  }
   
  const btnSortByname =()=> {
    const getContact = [...contacts];
    setContacts(getContact.sort ((contact1,contact2) => contact1.name.localeCompare(contact2.name)));
  }

  const btnDelete =(id)=> {
    setContacts(contacts.filter(contact => contact.id !== id));
  }


// display function
  const displayContacts = () => {
    return (
      contacts.map((contact) => {
        return (
          
            <Contacts key={contact.id}
              {...contact}
              btnDelete={btnDelete}
            />
         
        )
      })
    )
  }
  return <div className="App">
      <h1>Iron Contacts</h1>
    <div>
      <button onClick={()=> btnAddContact ()}>Add Random Contact</button>
      <button onClick={()=> btnSortBypopularity ()}>Sort Contacts by Popularity</button>
      <button onClick={()=> btnSortByname ()}>Sort Contacts by Name</button>
    </div>
    <div className="bar">    
      <h2>Picture</h2>
      <h2>Name</h2>
      <h2>Popularity</h2>
      <h2>Won Oscar</h2>
      <h2>Won Emmy</h2>
      <h2>Actions</h2>
    </div>
    {
      displayContacts()
    }
    
  </div>;
  
}

export default App; 
