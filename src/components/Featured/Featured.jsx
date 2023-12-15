
const Featured = () => {
    return (

        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6 mb-6">

                <img className="w-[600px] lg:w-[820px] h-52 lg:h-96" src="src/assets/images/Discount 1.png" alt="" />
                <img className="w -[600px] lg:w-[820px] h-52 lg:h-96" src="src/assets/images/Discount 2.png" alt="" />
            </div>
            <div className="text-center py-4 mb-6 ">
                <h2 className="text-3xl font-bold mb-2">Featured Category</h2>
                <p className="text-lg">Get Your Desired Product from Featured Category!</p>
            </div>

            {/* Featured category */}

            <div className="grid grid-cols-1 lg:grid-cols-8 gap-12 mt-12 ">
                <div >
                    <span ><img className="" src="../../../src/assets/images/Mask group (1).png" alt="" /></span>
                    <h5 className="mt-3">Robotic Arms</h5>
                </div>
                <div>
                    <span><img src="../../../src/assets/images/Mask group (2).png" alt="" /></span>
                    <h5>Robotic Arms</h5>
                </div>
                <div>
                    <span><img src="../../../src/assets/images/Mask group (3).png" alt="" /></span>
                    <h5>Robotic Arms</h5>
                </div>
                <div>
                    <span><img src="../../../src/assets/images/Mask group (4).png" alt="" /></span>
                    <h5 className="mt-3">Robotic Arms</h5>
                </div>
                <div>
                    <span><img src="../../../src/assets/images/Mask group (5).png" alt="" /></span>
                    <h5 className="mt-3">Robotic Arms</h5>
                </div>
                <div>
                    <span><img src="../../../src/assets/images/Mask group (6).png" alt="" /></span>
                    <h5 className="mt-3">Robotic Arms</h5>
                </div>
                <div>
                    <span><img src="../../../src/assets/images/Mask group (7).png" alt="" /></span>
                    <h5 className="mt-3">Robotic Arms</h5>
                </div>
                <div>
                    <span><img src="../../../src/assets/images/Mask group.png" alt="" /></span>
                    <h5 className="mt-3">Robotic Arms</h5>
                </div>
            </div>

            {/* Robotics section start */}

            <section class="my-24">
                <div className="flex justify-between mb-6">
                    <h3 className="text-3xl font-normal text-left mb-12 ">Offer Products</h3>
                    <h4 className="text-3xl font-normal">View All</h4>
                </div>
                <div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div class="card card-compact  bg-base-100 shadow-xl">
                        <figure><img src="src/assets/images/image-1(rc).jpg" alt="components" /></figure>
                        <div class="card-body text-center">
                            <h2 class=" text-2xl font-semibold text-center">CMOS Camera</h2>
                            <p class="text-base font-normal">TK:814.23 </p>
                            <div className="rating ml-28">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                    <div class="card card-compact  bg-base-100 shadow-xl">
                        <figure><img src="src/assets/images/image-2(rc).jpg" alt="components" /></figure>
                        <div class="card-body text-center">
                            <h2 class=" text-2xl font-semibold text-center">Digital IR Sensor</h2>
                            <p class="text-base font-normal">TK:199.67 </p>
                            <div className="rating ml-28">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                    <div class="card card-compact  bg-base-100 shadow-xl">
                        <figure><img src="src/assets/images/image-3(rc).jpg" alt="components" /></figure>
                        <div class="card-body text-center">
                            <h2 class=" text-2xl font-semibold text-center">L298N Motor Driver</h2>
                            <p class="text-base font-normal">TK:290.63</p>
                            <div className="rating ml-28">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                    <div class="card card-compact  bg-base-100 shadow-xl">
                        <figure><img src="src/assets/images/image-4(rc).jpg" alt="components" /></figure>
                        <div class="card-body text-center">
                            <h2 class=" text-2xl font-semibold text-center">Servo-Generic Metal Gear </h2>
                            <p class="text-base font-normal">TK:1050.15</p>
                            <div className="rating ml-28">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Robotics section end */}

            {/* Electrical Componets start */}

            <section class="my-24">
                <div className="flex justify-between mb-6">
                    <h3 className="text-3xl font-normal text-left mb-12 ">New Products</h3>
                    <h4 className="text-3xl font-normal">View All</h4>
                </div>
                <div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div class="card card-compact  bg-base-100 shadow-xl">
                        <figure><img src="src/assets/images/image-5(ee).jpg" alt="components" /></figure>
                        <div class="card-body text-center">
                            <h2 class=" text-2xl font-semibold text-center">Battery 9V</h2>
                            <p class="text-base font-normal">TK:71.19</p>
                            <div className="rating ml-28">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                    <div class="card card-compact  bg-base-100 shadow-xl">
                        <figure><img src="src\assets\images\image-6(ee).jpg" alt="components" /></figure>
                        <div class="card-body text-center">
                            <h2 class=" text-2xl font-semibold text-center">Cordless Screwdriver Set</h2>
                            <p class="text-base font-normal">TK:1600.6</p>
                            <div className="rating ml-28">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                    <div class="card card-compact  bg-base-100 shadow-xl">
                        <figure><img src="src\assets\images\image-7(ee).jpg" alt="components" /></figure>
                        <div class="card-body text-center">
                            <h2 class=" text-2xl font-semibold text-center">Battery Tester</h2>
                            <p class="text-base font-normal">TK:320.28</p>
                            <div className="rating ml-28">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                    <div class="card card-compact  bg-base-100 shadow-xl">
                        <figure><img src="src\assets\images\image-8(ee).jpg" alt="components" /></figure>
                        <div class="card-body text-center">
                            <h2 class=" text-2xl font-semibold text-center">UNI-T UT890D</h2>
                            <p class="text-base font-normal">TK:2672.18</p>
                            <div className="rating ml-28">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Electrical start end */}

            {/* Arduion section start */}
            <section class="my-24">
                <div className="flex justify-between mb-6">
                    <h3 className="text-3xl font-normal text-left mb-12 ">Featured Products</h3>
                    <h4 className="text-3xl font-normal">View All</h4>
                </div>
                <div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div class="card card-compact   bg-base-100 shadow-xl">
                        <figure><img src="src/assets/images/image-9(ar).jpg" alt="components" /></figure>
                        <div class="card-body text-center">
                            <h2 class=" text-2xl font-semibold text-center">SparkFun USB Host Shield</h2>
                            <p class="text-base font-normal">TK:2450.47</p>
                            <div className="rating ml-28">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                    <div class="card card-compact  bg-base-100 shadow-xl">
                        <figure><img src="src/assets/images/image-10(ar).jpg" alt="components" /></figure>
                        <div class="card-body text-center">
                            <h2 class=" text-2xl font-semibold text-center">Arduino LCD Keypad Shield</h2>
                            <p class="text-base font-normal">TK:740</p>
                            <div className="rating ml-28">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                    <div class="card card-compact  bg-base-100 shadow-xl">
                        <figure><img src="src/assets/images/image-11(ar).jpg" alt="components" /></figure>
                        <div class="card-body text-center">
                            <h2 class=" text-2xl font-semibold text-center">Arduino Video Game Shield</h2>
                            <p class="text-base font-normal">TK:2499.2</p>
                            <div className="rating ml-28">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                    <div class="card card-compact  bg-base-100 shadow-xl">
                        <figure><img src="src/assets/images/image-12(ar).jpg" alt="components" /></figure>
                        <div class="card-body text-center">
                            <h2 class=" text-2xl font-semibold text-center">EasyVR Shield 3.0</h2>
                            <p class="text-base font-normal">TK: 4890.32</p>
                            <div className="rating ml-28">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Arduino section end */}

            {/* slider -1 */}
            <div className="grid grid-cols-7 gap-2 mt-8">

                <img className="mt-12" src="src/assets/images/icon _chevron left_.png" alt="" />
                <img src="src/assets/images/slider1.png" alt="" />
                <img src="src/assets/images/slider2.png" alt="" />
                <img src="src/assets/images/slider3.png" alt="" />
                <img src="src/assets/images/slider4.png" alt="" />
                <img src="src/assets/images/slider5.png" alt="" />
                {/* <img src="src/assets/images/slider6.png" alt="" /> */}
                <img className="ml-24 mt-12" src="src/assets/images/icon _chevron right_.png" alt="" />
            </div>

            {/* center image */}
            <div className="flex justify-center ">
                <img  src="../../../src/assets/images/Untitled design(7) 1.png" alt="" />
            </div >

            {/*slider-2  */}

            <div className="grid grid-cols-7 gap-12 mt-12 mb-8">
                <img className="mt-12" src="src/assets/images/icon _chevron left_.png" alt="" />
                <img src="src/assets/images/1.png" alt="" />
                <img src="src/assets/images/2.png" alt="" />
                <img src="src/assets/images/3.png" alt="" />
                <img src="src/assets/images/4.png" alt="" />
                <img src="src/assets/images/5.png" alt="" />
                <img className="mt-12 ml-24" src="src/assets/images/icon _chevron right_.png" alt="" />
            </div>


        </div>
    );
};

export default Featured;