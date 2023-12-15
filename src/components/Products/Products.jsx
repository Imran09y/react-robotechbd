import Categories from "../Categories/Categories";
import CategoryCart from "../CategoryCart/CategoryCart";



const Products = () => {
    return (
        <div className="flex flex-row gap-4">
           <CategoryCart></CategoryCart>
           <Categories></Categories>       
        </div>
    );
};

export default Products;