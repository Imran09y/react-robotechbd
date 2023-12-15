import { Link } from "react-router-dom";

const Categorylist = ({ cate }) => {
    const {id, image,title,model,tk } = cate || {};
    return (
        <Link to={`/catag/${id}`}>
         <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image}  className="rounded-xl" />
            </figure>
            <div className="items-center text-center">
                <h2 className="text-2xl">{title}</h2>
                 <h5>{model}</h5>
                 <h5>{tk}</h5>        
            </div>  
        </div>
     </Link>
       
    );
};

export default Categorylist;