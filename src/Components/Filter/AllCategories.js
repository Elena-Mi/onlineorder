import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div className="allCategories">
            <h1>What kind of food do you like?</h1>
            {['SEAFOOD', 'ITALIAN', 'APPETIZERS', 'SALADS','ALL'].map((category, id) => <Filter category={category} key={id}/>)}
        </div>
    )
}
export default AllCategories;