import React, { useContext } from "react";
import navLogo from "../../assets/Images/navLogo.png";
import { NavLink } from "react-router-dom";
import { UserOther } from "../authContextApi/AuthProvider";

const Navbar = () => {
  const { logOut,user } = useContext(UserOther);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {});
  };

  return (
    <div className="navbar flex items-center justify-between bg-gray-800 rounded-full px-6">
      <div className="flex-1">
        <img className="w-16 mr-3" src={navLogo} alt="" />
        <h1 className="text-white font-semibold text-xl">
          Sports<span className="text-orange-500 font-bold text-4xl">&</span>
          Special
        </h1>
      </div>
      <div className="text-white">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 mx-4 py-1 px-2 border-b border-orange-500"
              : "py-1 text-gray-300 px-2 mx-4"
          }
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 mx-4 py-1 px-2 border-b border-orange-500"
              : "py-1 text-gray-300 px-2 mx-4"
          }
          to="/alltoys"
        >
          All Toys
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 mx-4 py-1 px-2 border-b border-orange-500"
              : "py-1 text-gray-300 px-2 mx-4"
          }
          to="/mytoys"
        >
          My Toys
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 mx-4 py-1 px-2 border-b border-orange-500"
              : "py-1 text-gray-300 px-2 mx-4"
          }
          to="/addtoy"
        >
          Add A Toy
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 mx-4 py-1 px-2 border-b border-orange-500"
              : "py-1 text-gray-300 px-2 mx-4"
          }
          to="/blog"
        >
          Blog
        </NavLink>

        {
            !user && <NavLink className="mx-4" to="/login">
            <button className="btn btn-info">Login</button>
          </NavLink>
        }
      </div>
      <div>
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
    </div>
  );
};

export default Navbar;
