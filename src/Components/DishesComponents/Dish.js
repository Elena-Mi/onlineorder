import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";



const Dish = ({dish}) => {

 const [quantity, setQuantity] = useState(1);
 const dispatch = useDispatch();
    return(
        <div>

          <div className="dish">
            <img className="img_dish" src={`${dish.img}.jpg`} alt='food'/>
            <h2 className="dish_name">{dish.name}</h2>
            <p className="dish_price">$ {dish.price}</p>
            
            <ChangeQuantity
                quantity = {quantity}
                setQuantity = {setQuantity}
            />
            <button className="dish_button" onClick={ () => {dispatch(addItemToCart({dish,quantity}))}}>Add to Cart</button>
            
           
            </div> 
          
        </div>
          
    )
}
export default Dish;