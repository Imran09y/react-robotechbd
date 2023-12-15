import { NavLink } from "react-router-dom";


const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
           
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
         <div class="circle-image">
          <img src="src/assets/images/Register.jpg" alt="Image" />
         
        </div>
            <div className='text-center'>
            <h2 className='text-3xl font-bold'>Sign Up</h2>
            </div>
            <form className="card-body">
            <div className="form-control">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input type="text" placeholder="username" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                  
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
                <div className='text-center'>
                    <h3 className='mb-2'>Already have an account?</h3>
                   <NavLink to='/login'><p className='text-teal-300'>Log in</p></NavLink>
                   
                </div>
            </form>
        </div>

    </div>
    );
};

export default Register;