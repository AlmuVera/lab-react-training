import './BoxColor.css'

function BoxColor({ r, g, b}){
  const boxStyle = {
    background: `rgb(${r}, ${g}, ${b})`,
  };

  function rgbToHex( {r}, {g}, {b} ) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  return(
   
    <div className="card m-3 rounded-0 card-border box-color p-4" style={boxStyle}>
      <h3 className="align-self-center">rgb({r},{g},{b}) </h3>
      <h3 className="align-self-center">{rgbToHex({r}, {g}, {b})} </h3>
    </div>
  )
}

export default BoxColor;