function Contacts ({pictureUrl, name, popularity, wonOscar, wonEmmy}){    
 return (

  <div  className="Contacts">   
        <img src={pictureUrl} className="contactPic" alt="no-img"/>
        <p>{name}</p>
        <p>{popularity.toFixed(2)}</p>
        {wonOscar && <p>🏆</p>}
        {wonEmmy && <p>🏆</p>}
  </div>

  )
} 

export default Contacts; 
