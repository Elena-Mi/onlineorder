import dishesData from "../../Data/dishesData";


const CartItem = ({cartItem}) => {
    console.log(cartItem);

        const dishes = dishesData.find(item => item.id === cartItem.dishId);
    return(
        <div>
                <p>{dishes.name}</p>
                <p>{dishes.img}</p>
                <p>{cartItem.quantity} portion(s)</p>
                <p>Price: $ {dishes.price * cartItem.quantity}</p>
        </div>
    )
}
export default CartItem;