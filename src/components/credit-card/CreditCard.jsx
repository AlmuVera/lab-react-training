import visa from '../../assets/images/visa.png';
import masterCard from '../../assets/images/masterCard.png';
import './CreditCard.css';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  let logo = '';
  if (type === 'Visa') {
    logo = visa;
  } else {
    logo = masterCard;
  }

  let month = { ...expirationMonth };
  if (expirationMonth < 10) {
    month = '0' + expirationMonth;
  } else {
    month = expirationMonth;
  }

  // let secretNum = number.slice(-4)

  return (
    <div
      className="card d-flex flex-column credit-card m-3 border-0"
      style={{
        backgroundColor: `${bgColor}`,
        color: `${color}`,
      }}
    >
      <div className="d-flex flex-column card-body">
        <img className="align-self-end logo" src={logo} alt={type} />
        {/* <div className='d-flex'>
          <h2 className="align-self-center me-4 my-4">{secretNum}</h2>
        </div> */}
        



        <h3 className="align-self-center my-3">
          <b>{number}</b>
        </h3>

        <div className='d-flex '>
          <h6 className="mx-2 mb-0">
            Expires {month}/{expirationYear}
          </h6>
          <h6 className="mx-2 mb-0">{bank}</h6>
        </div>

        <h6 className="mx-2">{owner}</h6>

      </div>
    </div>
  );
}

export default CreditCard;


