import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleLogin = (event) => {

        event.preventDefault()

        const password = event.target.password.value;
        const email = event.target.email.value;
        console.log(email, password)

        signInWithEmailAndPassword(email, password)

    }


    console.log(user)

    return (
        <div className='flex justify-center items-center my-12'>
            <div className="card w-96 bg-[#3553d6] shadow-xl text-white">
                <div className="card-body ">
                    <h2 className="text-center text-2xl font-bold">Login</h2>


                    <form onSubmit={handleLogin}>



                        <div className="form-control w-full max-w-xs text-black">
                            <label className="label">
                                <span className="label-text text-white">Email</span>

                            </label>

                            <input type="email"
                                placeholder="Email Address"
                                name="email"
                                className="input input-bordered w-full max-w-xs"

                            />

                        </div>



                        <div className="form-control w-full max-w-xs text-black">
                            <label className="label">
                                <span className="label-text text-white">Password</span>

                            </label>

                            <input type="password"
                                placeholder="Password"
                                name="password"
                                className="input input-bordered w-full max-w-xs"
                            />



                        </div>






                        <input className='btn  w-full max-w-xs' type="submit" value="Register" />
                    </form>

                    <p className='text-lg'><small>Don't Have Account? <Link className='text-error font-semibold' to='/register'>Register</Link ></small></p>




                </div>
            </div>
        </div>
    );
};

export default Login;