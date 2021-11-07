import { Link } from 'react-router-dom'
import logo from '../logo.png'

const Register = () => {
  return(
   <>
    <div className="flex justify-center ">
      <div className="container md:w-4/6 w-5/6 shadow-md mt-20 grid xl:grid-cols-3 grid-cols-1 bg-blue-800 mb-20 xl:mb-0">
        <div className="bg-blue-800 px-8 grid pb-12 p-5 xl:pt-3 ">
          <div>
            <img src={logo} alt="logo" className="w-24"/>
          </div>
          <div className="text-center justify-self-center">
            <div className="text-white text-4xl font-bold text-center mb-2">
              Hello, Friend!
            </div>
            <div className="text-white text-center text-sm mb-3">
              Sudah Punya Akun ?
            </div>
            <Link to="/login">
              <button 
                className="bg-blue-800 rounded-full font-bold  border-white border-2 px-10 py-2 focus:outline-none hover:bg-blue-600 text-white"
                >
                Sign In
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-2 bg-white rounded-t-3xl xl:rounded-t-none p-4">
          <div className="xl:p-8 py-8 px-3">
            <div className="grid grid-cols-2 ">
              <div className="text-4xl text-blue-800 font-bold">
                Registration
              </div>
            </div>
          </div>
          
          <form className="xl:p-5">
            <div className="grid xl:grid-cols-2 xl:gap-4 gap-0">
              <div className="xl:px-4 px-2 xl:py-0">
                <div className="mb-8">
                  <label for="full-name" className="font-bold ml-2">Full Name</label>
                  <input 
                    className="rounded-xl border focus:ring-4 focus:outline-none focus:border-opacity-50 border-indigo-700 px-3 py-3 w-full" 
                    type="text" 
                    placeholder="Please enter your full name"
                  />
                </div>
                <div className="mb-8">
                  <label for="full-name" className="font-bold ml-2">Email</label>
                  <input 
                    className="rounded-xl border focus:ring-4 focus:outline-none focus:border-opacity-50 border-indigo-700 px-3 py-3 w-full" 
                    type="text" 
                    placeholder="Please enter your email"
                  />
                </div>
                <div className="mb-8">
                  <label for="full-name" className="font-bold ml-2">Country</label>
                  <input 
                    className="rounded-xl border focus:ring-4 focus:outline-none focus:border-opacity-50 border-indigo-700 px-3 py-3 w-full" 
                    type="text" 
                    placeholder="Please enter your country"
                  />
                </div>
                <div className="mb-8">
                  <label for="full-name" className="font-bold ml-2">Password</label>
                  <input 
                    className="rounded-xl border focus:ring-4 focus:outline-none focus:border-opacity-50 border-indigo-700 px-3 py-3 w-full" 
                    type="password" 
                    placeholder="Please enter your password"
                  />
                </div>
              </div>
              <div className="xl:px-4 px-2 pt-0 grid">
                <div className="mb-8">
                  <label for="full-name" className="font-bold ml-2">Description</label>
                  <input 
                    className="rounded-xl border focus:ring-4 focus:outline-none focus:border-opacity-50 border-indigo-700 px-3 py-3 w-full" 
                    type="text" 
                    placeholder="Description"
                  />
                </div>
                <div className="mb-8">
                  <label for="full-name" className="font-bold ml-2">Phone Number</label>
                  <input 
                    className="rounded-xl border focus:ring-4 focus:outline-none focus:border-opacity-50 border-indigo-700 px-3 py-3 w-full" 
                    type="text" 
                    placeholder="Please enter your phone number"
                  />
                </div>
                <div className="mb-8">
                  <label for="full-name" className="font-bold ml-2">City</label>
                  <input 
                    className="rounded-xl border focus:ring-4 focus:outline-none focus:border-opacity-50 border-indigo-700 px-3 py-3 w-full" 
                    type="text" 
                    placeholder="Please enter your city"
                  />
                </div>
                <div className="mb-8 xl:order-last order-first">
                  <label for="full-name" className="font-bold ml-2">Confirm Password</label>
                  <input 
                    className="rounded-xl border focus:ring-4 focus:outline-none focus:border-opacity-50 border-indigo-700 px-3 py-3 w-full" 
                    type="text" 
                    placeholder="Confirm password"
                  />
                </div>
              </div>
            </div>      
            
            <div className="px-4 xl:py-0 ">
              <div className="font-bold">Gender</div>
              <div className="grid xl:grid-cols-4 sm:grid-cols-2">
                <div>
                  <input className="mr-2 mt-3 xl:mt-0" type="radio" name="gender" />
                  <label>Male</label>
                </div>
                <div>
                  <input className="mr-2 mt-3 xl:mt-0" type="radio" name="gender" />
                  <label>Female</label>
                </div>
                <div>
                  <input className="mr-2 mt-3 xl:mt-0" type="radio" name="gender" />
                  <label>Other</label>
                </div>
                <div>
                  <input className="mr-2 mt-3 xl:mt-0" type="radio" name="gender" />
                  <label>Prefer no to say</label>
                </div>
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <button 
              className="bg-blue-800 rounded-full font-bold xl:w-3/4 w-full p-2 text-white hover:bg-blue-600"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>  
    </div>
   </>
  )
}

export default Register