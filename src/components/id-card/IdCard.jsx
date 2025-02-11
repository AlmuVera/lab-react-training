import './IdCard.css'
import '../../../src/App.css'
function IdCard({ lastName, firstName, gender, height, birth, picture}){
  
  //to pass the height to meters instead cm
  const heightM = height/100
  let birthdate = birth.toDateString()
  
  return(
    <div className="card m-3 rounded-0 card-border ">
      <div className="row g-0">
        <div className="img-id-card">
          <img src={picture} className="m-2" alt={firstName} />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h6 className='m-0'><b>First name:</b> {firstName}</h6>
            <h6 className='m-0'><b>Last name:</b> {lastName}</h6>
            <h6 className='m-0'><b>Gender:</b> {gender}</h6>
            <h6 className='m-0'><b>Height:</b> {heightM}</h6>
            <h6 className='m-0'><b>Birth:</b> {birthdate}</h6>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdCard;