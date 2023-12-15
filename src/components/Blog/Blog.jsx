import Marquee from "react-fast-marquee";
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className="hero  bg-base-200 mb-4 mt-4">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="src/assets/images/Blog (1).jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Unleashing Tomorrow's Tech Today</h1>
                        <p className="py-6">Explore the latest in cutting-edge technology at our tech shop, where innovation meets convenience.
                        Discover a world of gadgets and gear that redefine your tech experience, only at our tech shop.Stay ahead in the tech game 
                        with our curated selection of state-of-the-art devices, designed for the modern tech enthusiast.
                        </p>
                        <button className="btn btn-secondary">Read More</button>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-200 mb-4">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="src/assets/images/Blog 2.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">TechShop Chronicles</h1>
                        <p className="py-6">Explore the latest in cutting-edge technology at our tech shop, where innovation meets convenience.
                        Discover a world of gadgets and gear that redefine your tech experience, only at our tech shop.Stay ahead in the tech game 
                        with our curated selection of state-of-the-art devices, designed for the modern tech enthusiast.
                        </p>
                        <button className="btn btn-secondary">Read More</button>
                    </div>
                </div>
            </div>
            <div className="hero  bg-base-200 mb-4">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="src/assets/images/Blog 3.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Revolutionize Your World</h1>
                        <p className="py-6">Explore the latest in cutting-edge technology at our tech shop, where innovation meets convenience.
                        Discover a world of gadgets and gear that redefine your tech experience, only at our tech shop.Stay ahead in the tech game 
                        with our curated selection of state-of-the-art devices, designed for the modern tech enthusiast.
                        </p>
                        <button className="btn btn-secondary">Read More</button>
                    </div>
                </div>
            </div>
            <div className="hero  bg-base-200 mb-4">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="src/assets/images/Blog 4.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Beyond Imagination</h1>
                        <p className="py-6">Explore the latest in cutting-edge technology at our tech shop, where innovation meets convenience.
                        Discover a world of gadgets and gear that redefine your tech experience, only at our tech shop.Stay ahead in the tech game 
                        with our curated selection of state-of-the-art devices, designed for the modern tech enthusiast.
                        </p>
                        <button className="btn btn-secondary">Read More</button>
                    </div>
                </div>
            </div>

                     <div>
                        <h2 className="text-3xl font-semibold text-center mt-8 mb-8">Our Partners</h2>
                     </div>
            <Marquee direction="left" speed={100} pauseOnHover={true}>
                <div className="image_wrapper">
                    <img src="src/assets/images/one.png" alt="" />
                </div>
                <div className="image_wrapper">
                    <img src="src/assets/images/two.png" alt="" />
                </div>
                <div className="image_wrapper">
                    <img src="src/assets/images/three.png" alt="" />
                </div>
                <div className="image_wrapper">
                    <img src="src/assets/images/four.png" alt="" />
                </div>
                <div>
                    <img src="src/assets/images/five.png" alt="" />
                </div>
                <div className="image_wrapper">
                    <img src="src/assets/images/six.png" alt="" />
                </div>
                <div className="image_wrapper">
                    <img src="src/assets/images/seven.png" alt="" />
                </div>
                <div className="image_wrapper">
                    <img src="src/assets/images/eight.png" alt="" />
                </div>
                <div className="image_wrapper">
                    <img src="src/assets/images/nine.png" alt="" />
                </div>
                <div className="image_wrapper">
                    <img src="src/assets/images/ten.png" alt="" />
                </div>
            </Marquee>

        </div>



    );
};

export default Blog;