import { NavLink } from "react-router-dom";


const CategoryCart = () => {



    return (
        <div className="border-2 w-[500px] h-[1055px] mt-32 rounded-lg">
            <div>
                <h2 className="text-3xl font-bold ml-12 mt-8 mb-4">Filter by Category</h2>
                <hr />

                <ul className="ml-12 py-4">
                    <li className="mb-2"><NavLink>Robotics Toys</NavLink></li>
                    <li className="mb-2"><NavLink>Industrial Automation</NavLink></li>
                    <li className="mb-2"><NavLink>Robotics for Kids</NavLink></li>
                    <li className="mb-2"> <NavLink>Robotic Gadgets</NavLink></li>
                    <li className="mb-2"><NavLink>Robotic Toys</NavLink></li>
                    <li className="mb-2"><NavLink>Industrial Automation</NavLink></li>
                    <li className="mb-2"> <NavLink>Robotic Gadgets</NavLink></li>
                </ul>
            </div>
            <div>
                <h2 className="text-3xl font-bold ml-12 mb-4">Filter by price</h2>
                <hr />
                <div className="flex flex-row gap-6 mt-8 px-8">
                    <p>10</p>
                    <input type="range" min={0} max="100" value="40" className="range range-accent" />
                    <p>100</p>
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-bold ml-12 mt-16 mb-4">Filter by Brand</h2>
                <hr />
                <ul className="ml-12 py-4">
                    <li className="mb-2"><NavLink>RoboGenius</NavLink></li>
                    <li className="mb-2"><NavLink>CyberNex</NavLink></li>
                    <li className="mb-2"><NavLink>MechMinds</NavLink></li>
                    <li className="mb-2"> <NavLink>TechTronics</NavLink></li>
                    <li className="mb-2"><NavLink>RoboWave</NavLink></li>
                    <li className="mb-2"><NavLink>FutureBots</NavLink></li>
                    <li className="mb-2"> <NavLink>RoboCraze</NavLink></li>
                </ul>
            </div>
             <div>
                <h2 className="text-3xl font-bold ml-12 mt-12 mb-4">Filter by Ratting</h2>
                <hr />
                <div className="flex flex-row gap-6 mt-8 px-8">
                    <p>0</p>
                    <input type="range" min={0} max="100" value="40" className="range range-accent" />
                    <p>5</p>
                </div>
             </div>
        </div>

    );






};

export default CategoryCart;