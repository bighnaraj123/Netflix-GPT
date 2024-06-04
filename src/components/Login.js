import Header from "./Header"

const Login = () => {
  return (
    <div className=" h-screen 
    bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg')]" >
        <div className="bg-gradient-to-b from-black h-screen  opacity-90">
            <Header></Header>


            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm p-10 bg-black text-white">
            <h2 className="text-4xl mb-4 font-bold">Sign in</h2>
          <form className="space-y-6" action="#" method="POST">
 
     
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email/Mobile Number"
                  required
                  className="block w-full p-3 border-0   placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>



              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Password"
                  required
                  className="block w-full p-3  border-0    placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
          

            <div>
              <button
                type="submit"
                className="flex w-full justify-center  bg-red-600 px-3 p-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
          New to Netflix?{' '}
            <a href="#" className="font-semibold leading-6 text-white hover:underline">
              Signup Now
            </a>
          </p>
        </div>


        </div>
        
        
    </div>
  )
}

export default Login