import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div className="allCategories ">
            <h1>What kind of food do you like?</h1>
            {['SEAFOOD', 'ITALIAN', 'APPETIZERS', 'SALADS','ALL'].map((category) => <Filter category={category} key={category}/>)}
        </div>
    )
}
export default AllCategories;