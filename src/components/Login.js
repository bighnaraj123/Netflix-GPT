import { useState } from "react"
import Header from "./Header"

const Login = () => {
    const [isSigninForm, setIsSigninForm] =useState(true);

    const toggleSignin = () =>{
        setIsSigninForm(!isSigninForm);
    }

  return (
    <div className=" bg-black text-white relative z-0 h-screen">
            <div className=" h-screen  opacity-50 absolute w-screen -z-10 
            bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg')]" >

            </div>
    
            <Header></Header>
            <div className="max-w-md mt-10 sm:mx-auto sm:w-full sm:max-w-sm p-10 bg-black text-white ">
            <h2 className="text-4xl mb-4 font-bold">
                {isSigninForm? "Sign in" : "Sign Up"}
            </h2>
            <form className="space-y-6" >
            
            {!isSigninForm && <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your name"
                 
                  className="block w-full p-3 border-0 text-white bg-slate-600  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                />
              </div>}
     
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  placeholder="Email/Mobile Number"
                 
                  className="block w-full p-3 border-0 text-white bg-slate-600  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                />
              </div>



              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Password"
             
                  className="block w-full p-3 border-0 text-white bg-slate-600  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                />
              </div>
          

            <div>
              <button
                
                className="flex w-full justify-center  bg-red-600 px-3 p-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isSigninForm? "Sign in" : "Sign Up"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
          {isSigninForm? "New to Netflix?" : "Already a User"}{' '}
            <a href="#" onClick={toggleSignin} className="font-semibold leading-6 text-white hover:underline">
            {isSigninForm? "Signup Now" : "Login Now"}
            </a>
          </p>
        </div>
    </div>
  )
}

export default Login