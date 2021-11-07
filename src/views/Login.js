import { Link } from "react-router-dom";
import logo from '../logo.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';

const Login = () => {
  return(
    <>
      <div className="flex justify-center">
        <div className="container md:w-3/4 w-5/6 items-center shadow-md mt-20 grid grid-cols-3">
          <div className="bg-blue-800 px-8 grid pb-12 p-5">
            <div>
              <img src={logo} alt="Logo" className="w-24"/>
            </div>
            <div className="text-center justify-self-center my-32">
                <div className="text-white text-4xl font-bold text-center mb-5">
                  Hello, Friend!
                </div>
                <div className="text-white text-center text-sm mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In ut dolor iure cupiditate! Ducimus pariatur doloremque quasi explicabo nostrum voluptatum.
                </div>
                <Link to="/register">
                  <button className="bg-blue-800 rounded-full font-bold  border-white border-2 px-10 py-2 focus:outline-none hover:bg-blue-600 text-white">
                    Sign Up
                  </button>
                </Link>
            </div>
          </div>

          <div className="col-span-2 text-center py-20">
            <h1 className="font-bold text-4xl text-blue-800 mb-10">Sign in to Account</h1>
            <div className="flex justify-evenly w-3/6 mx-auto mb-5 text-center">
              <a href="#"><img src={twitter} alt="Instagram" className="w-10"/></a>
              <a href="#"><img src={instagram} alt="Instagram" className="w-10"/></a>
              <a href="#"><img src={facebook} alt="Instagram" className="w-10"/></a>
            </div>
            <p>or use your email account</p>
            <form action="" className="mt-5">
              <input type="email" name="email" id="email" placeholder="example@email.com" className="block mx-auto mb-5 p-2 border-2 border-blue-800 rounded-xl w-80"/>
              <input type="password" name="password" id="password" placeholder="password" className="block mx-auto mb-5 p-2 border-2 border-blue-800 rounded-xl w-80"/>

              <div className="flex justify-between w-80 mx-auto mb-5">
                <div>
                  <a href="#">Remember me</a>
                </div>
                <div>
                  <a href="#">Forgot Password?</a>
                </div>
              </div>

              <button className="bg-blue-800 rounded-full font-bold px-10 py-2 focus:outline-none hover:bg-blue-600 text-white">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login