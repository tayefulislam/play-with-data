import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='flex justify-center items-center my-12'>
            <div className="card w-96 bg-[#3553d6] shadow-xl text-white">
                <div className="card-body ">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>


                    <form  >


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Name</span>

                            </label>

                            <input type="text"
                                placeholder="Your Name"
                                name='name'
                                className="input input-bordered w-full max-w-xs"

                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Email</span>

                            </label>

                            <input type="email"
                                placeholder="Email Address"
                                name="email"
                                className="input input-bordered w-full max-w-xs"

                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
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

                    <p className='text-lg'><small>Already Have Account? <Link className='text-error font-semibold' to='/login'>Login</Link ></small></p>




                </div>
            </div>
        </div>
    );
};

export default Register;