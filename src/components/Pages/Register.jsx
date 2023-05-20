import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import googleIcon from "../../assets/Icons/Google.png";
import { UserOther } from '../authContextApi/AuthProvider';
import toast from "react-hot-toast";
import dynamicTitle from '../Shared/CustomHook';

const Register = () => {
    const [error,setError]=useState("")
    const {createUser,updateData, googleLogin, logOut}=useContext(UserOther);
    const navigate=useNavigate()

    dynamicTitle('Register')

    const handleRegister=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const photo=form.photo.value;

        if(email==""){
            setError("Error : email has been required!")
            return
        }
        else if(password==""){
            setError("Error : password has been required")
            return
        }
        else if(password.length<6){
            setError("Error : password at least 6 characters")
            return
        }
        
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            updateData(user,name,photo)
            .then(result=>{
                console.log(result)
            })
            .catch(error=>{
                setError(error.message)
            })
            toast.success('Successfully Registared')
            setError("")
            navigate('/login')
            form.reset()
        })
        .catch(error=>{
            console.log(error)
            setError(error.message)
        })

    }

    const handleGoogleRegister=()=>{
        googleLogin()
        .then(result=>{
          const user=result.user;
          updateData(user,user.displayName,user.photoURL)
            .then(result=>{
                console.log(result)
            })
            .catch(error=>{
                setError(error.message)
          })
          toast.success('Successfully Registred!')
          navigate('/login')
          // console.log(result.user)
        })
        .catch(error=>{
          setError(error.message)
        })
    }

    return (
        <div className="min-h-[calc(100vh-146px)] my-20 flex items-center justify-center">
      <div className="bg-gray-100 border-2 border-gray-300 w-2/5 p-8 rounded-xl shadow-xl">
        <h1 className="text-center font-bold text-xl mb-5">Register Please</h1>
        <form onSubmit={handleRegister}>
          <div className="w-full">
            <label htmlFor="name">
              <span className="text-gray-600 ml-2">Name</span>
            </label>
            <br />
            <input
              className="w-full h-12 py-2 px-4 bg-gray-200 rounded-full focus:outline-none focus:rounded-none focus:border-b-2 focus:border-orange-500 focus:bg-transparent mb-4 my-2"
              type="text"
              name="name"
              id=""
              placeholder="Enter Your Name"
            />
          </div>

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
            <label htmlFor="photoURL">
              <span className="text-gray-600 ml-2">photoURL</span>
            </label>
            <br />
            <input
              className="w-full h-12 py-2 px-4 bg-gray-200 rounded-full focus:outline-none focus:rounded-none focus:border-b-2 focus:border-orange-500 focus:bg-transparent mb-4 my-2"
              type="url"
              name="photo"
              id=""
              placeholder="Enter Your photoURL"
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
              value="Register"
            />
          </div>
          <p className="mt-2 text-right">
            Already Have An Account?
            <Link to="/login" className="text-blue-500 underline">
              Login
            </Link>
          </p>
        </form>
        <div onClick={handleGoogleRegister} className="flex hover:bg-gray-200 items-center justify-center bg-gray-100 border-2 border-gray-400 rounded-full mt-7 cursor-pointer py-3 px-4">
          <img className="w-6" src={googleIcon} alt="" />
          <span className="ml-2 text-black font-bold">
            Register With Google
          </span>
        </div>
        <p className='text-red-500 text-center mt-3'>{error}</p>
      </div>
    </div>
    );
};

export default Register;