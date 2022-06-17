import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);



    return (
        <div class="navbar bg-base-100">
            <div class="flex-1">
                <Link to='/' class="btn btn-ghost normal-case text-xl">Play With Data</Link>
            </div>
            <div class="flex-none">

                <div class="dropdown dropdown-end">

                    {
                        !user && <Link to='/login' className='btn btn-md'>Login</Link>
                    }


                    {/* if user login */}
                    {
                        user && <>
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 rounded-full">
                                    <img src="https://api.lorem.space/image/face?hash=33791" />
                                </div>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a class="justify-between">
                                        Profile
                                        <span class="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><button onClick={() => signOut(auth)}>Logout</button></li>
                            </ul>
                        </>
                    }



                </div>
            </div>
        </div>
    );
};

export default Navbar;