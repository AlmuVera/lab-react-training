
import '../../../src/App.css'

function Greetings({ lang, children}){
  let greeting = ""
  switch (lang) {
    case "eng":
      greeting = "Hello";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
    case "es":
      greeting = "Hola";
    break;
    default :
      greeting = "Hallo"
  }

  return(
   
    <div className="card m-3 rounded-0 card-border">
      <h3 className='m-1'>{greeting} {children}</h3>
    </div>
       
  )
}

export default Greetings;