import React from 'react';
import { Link, NavLink } from 'react-router-dom';



const Navbar = () => {
   return (
      <div className="navbar bg-base-100">
         <div className="flex-1">
            <Link className="btn btn-ghost normal-case text-xl">Naimur</Link>
         </div>
         <div className="flex-none">

            <div className="dropdown dropdown-end mr-2">

               <div className="flex gap-4">
                  <NavLink to='/home'>
                     Home
                  </NavLink>
                  <NavLink to='/about'>About</NavLink>
                  <NavLink to='/contact'>
                     Contact
                  </NavLink>
                  <NavLink to='blog'>Blog</NavLink>
               </div>
            </div>

            {/* <div className="dropdown dropdown-end">
               <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                     <img src={dp} alt='' />
                  </div>
               </label>
               <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                     <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                     </a>
                  </li>
                  <li><a>Settings</a></li>
                  <li><a>Logout</a></li>
               </ul>
            </div> */}
         </div>
      </div>
   );
};

export default Navbar;