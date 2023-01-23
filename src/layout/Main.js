import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../pages/Context/Context';
import Footer from '../share/Footer';
import Navbar from '../share/Navbar';

const Main = () => {
    const {user, logOut} = useContext(AuthContext)
    return (
        <div>
             <Navbar></Navbar>
             <div className='grid grid-cols-6 gap-4 text-neutral rounded mx-auto'>
            <div className=' hidden   md:flex bg-gray-100 my-2'>
                <div className="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {/* <!-- Page content here --> */}
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side ">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80  pt-20 text-neutral">
                            {/* <!-- Sidebar content here --> */}
                            <li className='rounded-t-3xl  bg-accent mb-4'><Link to='/'>Feed</Link></li>
                            <li className='rounded-t-3xl  bg-accent mb-4'><Link to='/dashboard'>Dashboard</Link></li>
                            {
                            user?.uid?  
                           <>
                            <li className='rounded-t-3xl bg-accent mb-4'><button onClick={logOut}  >Logout</button></li>
                           </>
                            :
                           <>
                            <li className='rounded-t-3xl bg-accent mb-4'><Link to='/login'>Login</Link></li>
                           </>
                            }
                            
                            <li className='rounded-t-3xl bg-accent mb-4'><Link to='/register'>Register</Link></li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className='col-span-6 md:col-span-5 my-1'><Outlet></Outlet> </div>
           

        </div>
            
             <Footer></Footer>
        </div>
    );
};

export default Main;