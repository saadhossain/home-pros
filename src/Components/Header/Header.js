import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assests/home-pros-logo.png';
const Header = () => {
    return (
        <div className='bg-hprohf text-white'>
            <div className='w-full md:w-10/12 mx-auto py-2'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-hprohf rounded-b w-52">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/properties'>Properties</Link></li>
                                <li><Link to='/agents'>Agent</Link></li>
                                <li><Link to='/offers'>Top Offers</Link></li>
                                <li><Link to='/login'>Login</Link></li>
                            </ul>
                        </div>
                        <Link  to='/' className="btn btn-ghost normal-case text-xl">
                            <span className='flex items-center'>
                                <img src={logo} alt='' className='w-10' />
                                <h2 className='text-xl font-bold'>HomePros</h2>
                            </span>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/properties'>Properties</Link></li>
                            <li><Link to='/agents'>Agent</Link></li>
                            <li><Link to='/offers'>Top Offers</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link to='/submit_property' className="bg-hpro2nd border-none py-2 px-3 rounded font-semibold">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;