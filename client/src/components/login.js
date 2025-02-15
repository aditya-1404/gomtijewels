import React, { useState } from 'react'
import Nav from './nav'
import '../components/login.css'
import { useContext} from 'react'
import {Auth} from '../context/authContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate=useNavigate()
    const {login}=useContext(Auth)
    const [email,setEmail]=useState("")
    const [pwd,setpwd]=useState("")
    const handlesubmit=async(e)=>{
        e.preventDefault()
        try{
        // const cred=await axios.post("https://gomti-jewels-git-main-aditya-1404s-projects.vercel.app/admin/login",{email,pwd},{withCredentials:true})
        const cred=await axios.post("https://gomti-backend.onrender.com/admin/login",{email,pwd},{withCredentials:true})
        navigate("/add");
        window.location.reload();
        }catch(err){
          alert("Invalid email or password")
          console.log(err)
        }
        // if(cred) console.log("login")
        // else console.log("failed")
        setEmail("")
        setpwd("")
    }
  return (
    <>
    <Nav></Nav>
    <div className="loginpage flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <img
          alt="Your Company"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        /> */}
        <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className=" mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handlesubmit} action="#" method="POST" className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              {/* <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div> */}
            </div>
            <div className="mt-2">
              <input
                id="password"
                value={pwd} 
                onChange={(e)=>setpwd(e.target.value)}
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        {/* <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Start a 14 day free trial
          </a>
        </p> */}
      </div>
    </div>
  </>
  )
}

export default Login
