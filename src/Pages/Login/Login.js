import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
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

    let showError = error?.message
    console.log(showError)

    const navigate = useNavigate()


    console.log(user)



    if (user) {
        navigate('/')

    }

    useEffect(() => {
        if (user) {

            toast.success('Your Login Successful')
        }

    }, [user])



    return (
        <div className='flex justify-center items-center my-12'>
            <div className="card w-96 bg-[#2145e6] shadow-xl text-white">
                <div className="card-body ">
                    <h2 className="text-center text-2xl font-bold">Login</h2>


                    <form onSubmit={handleLogin}>



                        <div className="form-control w-full max-w-xs text-black">
                            <label className="label">
                                <span className="label-text text-white">Email</span>

                            </label>

                            <input type="email"
                                required
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
                                required
                                placeholder="Password"
                                name="password"
                                className="input input-bordered w-full max-w-xs"
                            />



                        </div>


                        {
                            loading && <h1 className='text-center'>Loading...</h1>
                        }

                        {
                            error && <h1 className='text-center'>{showError}</h1>
                        }






                        <input className='btn  w-full max-w-xs' type="submit" value="Register" />
                    </form>

                    <p className='text-lg'><small>Don't Have Account? <Link className='text-error font-semibold' to='/register'>Register</Link ></small></p>




                </div>
            </div>
        </div>
    );
};

export default Login;