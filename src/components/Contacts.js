import React from "react"; 




function Contacts (props){

    <h2>Contacts</h2>
     
    return (
        <div  className="contacts">
            <p>Name: {props.name}</p>
            <img className="Picture" src={props.image} alt="" />
            <p>Popularity: {props.popularity}</p>
            <p>Id: {props.id}</p>
            
          {/*   must to be fixed */}
            <p>Oscars: {props.wonOscars ? 'Oscars awarded 🙌' : 'Not Oscars awarded 💆‍♂️'}</p>
            <p>WonEmmy: {props.wonEmmy}</p>
        </div>

    )
}

export default Contacts;