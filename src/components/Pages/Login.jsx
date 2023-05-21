import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleIcon from "../../assets/Icons/Google.png";
import { UserOther } from "../authContextApi/AuthProvider";
import toast from "react-hot-toast";
import dynamicTitle from "../Shared/CustomHook";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, googleLogin, updateData } = useContext(UserOther);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  dynamicTitle('Login')

  // user login handler
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        toast.success("Successfully logged!");
        navigate(from);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // user google login handler
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        updateData(user,user.displayName,user.photoURL)
            .then(result=>{
                console.log(result)
            })
            .catch(error=>{
              setError(error.message)
        })
        console.log(user);
        toast.success("Successfully logged!");
        navigate(from);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="min-h-[calc(100vh-146px)] flex items-center justify-center">
      <div className="bg-gray-100 border-2 my-20 border-gray-300 w-2/5 p-8 rounded-xl shadow-xl">
        <h1 className="text-center font-bold text-xl mb-5">Login Please</h1>
        <form onSubmit={handleLogin}>
          <div className="w-full">
            <label htmlFor="email">
              <span className="text-gray-600 ml-2">Email</span>
            </label>
            <br />
            <input
              className="w-full h-12 py-2 px-4 bg-gray-200 rounded-full focus:outline-none focus:rounded-none focus:border-b-2 focus:border-orange-500 focus:bg-transparent mb-4 my-2"
              type="email"
              name="email"
              id=""
              placeholder="Enter Your Email"
            />
          </div>

          <div className="w-full">
            <label htmlFor="password">
              <span className="text-gray-600 ml-2">Password</span>
            </label>
            <br />
            <input
              className="w-full h-12 py-2 px-4 bg-gray-200 rounded-full focus:outline-none focus:rounded-none focus:border-b-2 focus:border-orange-500 focus:bg-transparent mb-4 my-2"
              type="password"
              name="password"
              id=""
              placeholder="Enter Your Password"
            />
          </div>
          <div className="w-full">
            <input
              className="h-12 bg-orange-500 mt-5 font-semibold text-lg btn-block rounded-full"
              type="submit"
              value="Login"
            />
          </div>
          <p className="mt-2 text-right">
            Are You New?
            <Link to="/register" className="text-blue-500 underline">
              Register
            </Link>
          </p>
        </form>
        <div
          onClick={handleGoogleLogin}
          className="flex hover:bg-gray-200 items-center justify-center bg-gray-100 border-2 border-gray-400 rounded-full mt-7 cursor-pointer py-3 px-4"
        >
          <img className="w-6" src={googleIcon} alt="" />
          <span className="ml-2 text-black font-bold">Login With Google</span>
        </div>
        <p className="text-red-500 mt-3 text-center">{error}</p>
      </div>
    </div>
  );
};

export default Login;
