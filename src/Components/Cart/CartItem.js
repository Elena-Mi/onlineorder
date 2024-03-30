import dishesData from "../../Data/dishesData";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from '../../redux/cartSlice'



const CartItem = ({cartItem}) => {
   

        const dishes = dishesData.find(item => item.id === cartItem.dishId);
        const dispatch = useDispatch();
    return(
        <div className="cart_container order_container">
                <p className="cart_name">{dishes.name}</p>
                <img className="imgCart" src={`${dishes.img}.jpg`} alt='food'/>
                <p className="cart_portion">{cartItem.quantity} portion(s)</p>
                <p className="cart_price">Price: $ {dishes.price * cartItem.quantity}</p>
                <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))} >
                <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="delete order"/>
                </span>
        </div>
    )
}
export default CartItem;