import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init'
import { useEffect } from 'react';



const Register = () => {
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    let showError = error?.message;

    const handleRegister = async (event) => {
        event.preventDefault()

        const name = event.target.name.value;
        const password = event.target.password.value;
        const email = event.target.email.value;
        // console.log(name, email, password)

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })


    }

    console.log(user)


    if (user) {
        navigate('/')

    }

    useEffect(() => {
        if (user) {

            toast.success('Registation Successful')
        }

    }, [user])


    return (
        <div className='flex justify-center items-center my-12'>
            <div className="card w-96 bg-[#3553d6] shadow-xl text-white">
                <div className="card-body ">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>


                    <form onSubmit={handleRegister}>


                        <div className="form-control w-full max-w-xs text-black">
                            <label className="label">
                                <span className="label-text text-white">Name</span>

                            </label>

                            <input type="text"
                                required
                                placeholder="Your Name"
                                name='name'
                                className="input input-bordered w-full max-w-xs"

                            />

                        </div>
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

                    <p className='text-lg'><small>Already Have Account? <Link className='text-error font-semibold' to='/login'>Login</Link ></small></p>




                </div>
            </div>
        </div>
    );
};

export default Register;