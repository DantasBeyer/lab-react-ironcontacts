function Contacts ({pictureUrl, name, popularity, wonOscar, wonEmmy, id, btnDelete}){    
 return (

  <div  className="Contacts">   
        <img src={pictureUrl} className="Picture" alt="no-img"/>
        <p>{name}</p>
        <p>{popularity.toFixed(2)}</p>
        {wonOscar && <p>🏆</p>}
        {wonEmmy && <p>🏆</p>}
        <button className="btnDell" onClick={()=> btnDelete(id)}>Delete Contact </button>
  </div>

  )
} 

export default Contacts; 
