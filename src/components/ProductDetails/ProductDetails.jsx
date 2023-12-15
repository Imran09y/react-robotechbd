import { useLoaderData, useParams } from "react-router-dom";


const ProductDetails = () => {

    const Catags = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const catag = Catags.find(catag => catag.id === idInt);
    console.log(catag);
    return (
        <div>

            <div className="grid grid-cols-2 gap-4 ">

                {/* image part */}
                <div className="border rounded-lg  py-12 px-12">
                    <img className="w-[600px]" src={catag.image} alt="" />
                </div>

                {/* Product details part */}
                <div className="border rounded-lg">
                    <div className="py-12 px-8">
                        <p className="text-2xl font-bold mb-4">Product Id : {catag.model}</p>
                        <hr />
                        <h3 className="text-2xl mb-4 mt-3 font-bold">Product Name: {catag.title}</h3>
                        <div className="flex flex-row gap-4 mb-4">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div>
                                <p>20 Review/4.5 ratting</p>
                            </div>
                        </div>
                        <h4 className="text-2xl font-semibold mb-4">Price : {catag.tk} TK.</h4>
                        <hr className="mt-2 mb-2" />

                        <div className="flex flex-row gap-4 mb-4 mt-4">
                            <span className="border-2 px-3 m-2">-</span> <p className="text-lg mt-2 font-bold">1</p> <span className="border-2 px-3 m-2">+</span>

                            <button className="btn btn-warning mr-12 ">Add to Cart</button>
                        </div>
                        <hr />
                        <div className="mb-4">
                            <h2 className="text-2xl font-semibold mb-4 mt-4">Available Offers:</h2>
                            <div>
                                <span>  <img src="src/assets/images/🦆 icon _tags_.png" alt="" /></span>
                                <p>Bank Offer10% off on HDFC Bank Credit Card EMI Transactions, up to ₹1,500 on orders of ₹7,500 and above</p>
                            </div>

                        </div>
                        <hr />
                    </div>


                    <div className="text-left ml-8 mb-4">
                        <button className="btn btn-warning mr-12 w-[200px]">Submit Review</button>
                    </div>

                </div>

                {/* subimage */}
                <div className="grid grid-cols-3 gap-4 w-96 justify-center px-4 py-4 ">
                    <div >
                        <img src={catag.image} alt="" />
                    </div>
                    <div>
                        <img src={catag.image} alt="" />
                    </div>
                    <div>
                        <img src={catag.image} alt="" />
                    </div>
                </div>

                {/* two button part */}

            </div>
            <div className="text-left mb-8 mt-8 ">
                <button className="btn btn-warning mr-6 w-[370px] ">Add to Cart</button>
                <button class="btn btn-outline btn-warning w-[370px]">Buy Now</button>
            </div>

            {/* Description part */}
            <div className="flex justify-between mt-6 gap-4 mb-12">
                <div>
                    <h2 className="text-4xl mb-4">Specification</h2>
                    <p> <li>{catag.description}</li> </p>
                </div>
                <div>
                    <h2 className="text-4xl mb-4">Product Description</h2>
                    <p><li>{catag.description}</li></p>
                </div>
            </div>

            {/* Related product section */}
            <h2 className="text-4xl text-left mt-10 mb-10">Related products</h2>
            <div className="grid grid-cols-4 gap-2">


                {/* related cart image */}
                <div className="card w-96 bg-base-100 shadow-xl">

                    <figure className="px-10 pt-10">
                        <img src={catag.image} alt="products" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Arduino Uno-3 orginal</h2>
                        <p>Tk:100.00</p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">

                    <figure className="px-10 pt-10">
                        <img src={catag.image} alt="products" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Arduino Uno-3 orginal</h2>
                        <p>Tk:100.00</p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">

                    <figure className="px-10 pt-10">
                        <img src={catag.image} alt="products" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Arduino Uno-3 orginal</h2>
                        <p>Tk:100.00</p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">

                    <figure className="px-10 pt-10">
                        <img src={catag.image} alt="products" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Arduino Uno-3 orginal</h2>
                        <p>Tk:100.00</p>
                    </div>
                </div>




            </div>

            {/* related cart end  */}

            <hr className="mt-8" />

            {/* All review section */}

            <div className="mt-12 mb-12">
                <h2 className="text-4xl text-center mb-4">All Reviews</h2>
                <div className="grid grid-cols-4 gap-2">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6PWiT4jbOgFjpAy0ROofuZ4PS8AzvDqqlDw&usqp=CAU" alt="Review" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl font-semibold mb-4">John Denver</h2>
                            <p>
                                Customer reviews can provide valuable insights into the satisfaction or dissatisfaction of individuals with a product or service.
                                Positive reviews often highlight exceptional qualities such as excellent customer service,
                            </p>
                        </div>

                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6PWiT4jbOgFjpAy0ROofuZ4PS8AzvDqqlDw&usqp=CAU" alt="Review" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl font-semibold mb-4">John Denver</h2>
                            <p>
                                Customer reviews can provide valuable insights into the satisfaction or dissatisfaction of individuals with a product or service.
                                Positive reviews often highlight exceptional qualities such as excellent customer service,
                            </p>
                        </div>

                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6PWiT4jbOgFjpAy0ROofuZ4PS8AzvDqqlDw&usqp=CAU" alt="Review" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl font-semibold mb-4">John Denver</h2>
                            <p>
                                Customer reviews can provide valuable insights into the satisfaction or dissatisfaction of individuals with a product or service.
                                Positive reviews often highlight exceptional qualities such as excellent customer service,
                            </p>
                        </div>

                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6PWiT4jbOgFjpAy0ROofuZ4PS8AzvDqqlDw&usqp=CAU" alt="Review" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl font-semibold mb-4">John Denver</h2>
                            <p>Customer reviews can provide valuable insights into the satisfaction or dissatisfaction of individuals with a product or service.
                                Positive reviews often highlight exceptional qualities such as excellent customer service </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
};

export default ProductDetails;