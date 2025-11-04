
function Card(props) {
  return (
    <div className='card' >
        <img src={props.poster}/>
        <div className='card-body'>
            <h4>{props.title}</h4>
        </div>  
    </div> 
  )
}

export default Card