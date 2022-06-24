import { useState } from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import contactsJson from "./contacts.json"
 

function App() {
    const [contacts, setContacts] = useState(contactsJson); 

  return <div className="App">
            <Contacts name= {contacts[2].name}
                      image= {contacts[2].pictureUrl}
                      popularity={contacts[2].popularity}
                      id={contacts[2].id}
                      wonOscar={contacts[2].wonOscar}
                      wonEmmy={contacts[2].wonEmmy}
                      />
                      
         </div>;
  
}
export default App;