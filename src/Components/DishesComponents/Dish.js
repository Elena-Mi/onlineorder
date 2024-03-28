const Dish = ({dish}) => {

 
    return(
        <div>
          <div >
            <img src={`${dish.img}.jpg`} alt='food'/>
            <h2>{dish.name}</h2>
            <p>$ {dish.price}</p>
           
            </div> 
        </div>
    )
}
export default Dish;