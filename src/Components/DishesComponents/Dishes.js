import Dish from "./Dish";
import dishesData from "../../Data/dishesData";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/dishesSlice";

const Dishes = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return(
        <div>
            {dishesData.filter(dish => {
                if(selectedCategory === "ALL") return true;
                return selectedCategory === dish.category;
            }).map((dish ) => <Dish dish = {dish} key={dish.id}/>)}
        </div>
    )
}
export default Dishes;