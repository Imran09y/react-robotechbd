import { NavLink } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
           
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
             <div class="circle-image">
              <img src="src/assets/images/Login-Image.jpg" alt="Image" />
             
            </div>
                <div className='text-center'>
                <h2 className='text-3xl font-bold'>Login</h2>
                </div>
                <form className="card-body">
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-sm">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className='text-center'>
                        <h3 className='mb-2'>Don't have an account?</h3>
                       <NavLink to='/sign' ><p className='text-teal-300'>Sign Up</p></NavLink>
                       
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;