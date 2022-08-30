function Random({ min, max }) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div className="card m-3 rounded-0 card-border">
      <h3 className='m-1'>{`Random value between ${min} and ${max} => ${randomNumber}`}</h3>
    </div>
    
  );
}

export default Random;

