import { useState } from "react";
import './App.css';
import Contacts from "./components/Contacts";
import contactsJson from "./contacts.json"
 

function App() {
    const [contacts, setContacts] = useState(contactsJson); 

    
  return <div className="App">
    <h1>IronContacts</h1>

{  contactsJson.map((contacts) => {
    return (
      <div>
          <div className="bar">    
            <h2>Picture</h2>
            <h2>Name</h2>
            <h2>Popularity</h2>
          </div>

          <div> 
            <table className="Contacts">
              <img  className="Picture" src={contacts.pictureUrl} /> 
              <h4> {contacts.name}</h4>
              <h4> {contacts.popularity}</h4>
            </table>
          </div>

      </div>
    )
  })
}

    {/* <div className="bar">      
        <h2>Picture</h2>
        <h2>Name</h2>
        <h2>Popularity</h2>
    </div>

      <Contacts name= {contacts[2].name}
                image= {contacts[2].pictureUrl}
                popularity={contacts[2].popularity}
                />
                     */}  
         </div>;
  
}
export default App;