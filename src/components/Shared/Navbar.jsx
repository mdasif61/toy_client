import React, { useContext, useState } from "react";
import navLogo from "../../assets/Images/navLogo.png";
import { NavLink } from "react-router-dom";
import { UserOther } from "../authContextApi/AuthProvider";
import { FaAngleLeft, FaBars } from "react-icons/fa";

const Navbar = () => {
  const { logOut,user } = useContext(UserOther);
  const [open,setOpen]=useState(false)

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {});
  };

  return (
    <div className=" bg-gray-800 relative md:h-[70px] h-[50px] flex items-center w-full rounded-full px-6">
      <div onClick={()=>setOpen(!open)} className="text-white flex justify-between items-center w-full md:hidden">
        <span>{!open?<><FaBars/></>:<span className="text-2xl"><FaAngleLeft/></span>}</span>
        {!open? <div className="md:hidden">
        <h1 className="text-white font-semibold text-lg">
          Sports<span className="text-orange-500 font-bold text-xl">&</span>
          Special
        </h1>
        </div>:<img className="w-12 mr-3" src={navLogo} alt="" />}
      </div>
      <div className={`md:flex ${!open?"hidden":"bg-gray-800 absolute md:static top-16 rounded-2xl left-0 md:top-0 p-5 md:p-0 z-50"} w-full items-center justify-center`}>
      <div className="md:flex-1 flex">
        <img className="w-16 mr-3" src={navLogo} alt="" />
        <h1 className="text-white font-semibold text-xl">
          Sports<span className="text-orange-500 font-bold text-4xl">&</span>
          Special
        </h1>
      </div>
      <div className="text-white md:flex items-center">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 mx-4 block my-3 md:my-0 py-1 px-2 border-b border-orange-500"
              : "py-1 text-gray-300 block my-3 md:my-0 px-2 mx-4"
          }
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 mx-4 block my-3 md:my-0 py-1 px-2 border-b border-orange-500"
              : "py-1 text-gray-300 px-2 my-3 md:my-0 mx-4 block"
          }
          to="/alltoys"
        >
          All Toys
        </NavLink>

        {user && <>
          <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 mx-4 py-1 my-3 md:my-0 px-2 block border-b border-orange-500"
              : "py-1 text-gray-300 px-2 my-3 md:my-0 mx-4 block"
          }
          to="/mytoys"
        >
          My Toys
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 mx-4 py-1 px-2 my-3 md:my-0 border-b block border-orange-500"
              : "py-1 text-gray-300 px-2 my-3 md:my-0 mx-4 block"
          }
          to="/addtoy"
        >
          Add A Toy
        </NavLink>
        </>}

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 mx-4 py-1 px-2 my-3 md:my-0 block border-b border-orange-500"
              : "py-1 text-gray-300 px-2 mx-4 my-3 md:my-0 block"
          }
          to="/blog"
        >
          Blog
        </NavLink>

        {
            !user && <NavLink className="ml-4" to="/login">
            <button className="btn bg-orange-600 rounded-full hover:bg-orange-500 w-28">Login</button>
          </NavLink>
        }
      </div>
      {
        user && <div className="mx-4 md:mx-0">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div title={user?.displayName} className="w-10 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </label>
          <div
            tabIndex={0}
            className="menu h-56 menu-compact dropdown-content mt-3 p-5 shadow bg-gray-800 text-white flex justify-between rounded-box w-52"
          >
            <div>
              <img src="" alt="profile-img" />
            </div>
            <div>
              <a>Settings</a>
            </div>
            <div>
              {
                user?<>
                <button
                onClick={handleLogOut}
                className="btn btn-block btn-warning"
              >
                Logout
              </button>
                </>:<>
                <button
                onClick={handleLogOut}
                className="btn btn-block btn-warning"
              >
                Login
              </button>
                </>
              }
            </div>
          </div>
        </div>
      </div>
      }
      </div>
    </div>
  );
};

export default Navbar;
