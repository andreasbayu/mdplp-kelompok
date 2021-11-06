import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'
import Sidebar from './Sidebar'
import {
  AccountCircle,
  Notifications,
  KeyboardArrowDownSharp,
  Dehaze,
  ClearAll
} from '@material-ui/icons'


const Header = () => {
  const [isMenuShow, setIsMenuShow] = useState(false)
  const [isSidebarShow, setIsSidebarShow] = useState(false)

  const handleClickMenu = () => {
    setIsMenuShow(!isMenuShow)
  }

  const handleClickSidebar = () => {
    setIsSidebarShow(!isSidebarShow)
  }

  return(
    <>
      <nav className="p-4 bg-blue-800">
        <div className="w-full mx-auto">
          <div className="flex justify-between">
            <div className="flex space-x-3">
              <div>
                <button className="border-none text-white bg-blue-700 p-2 md:hidden rounded-md" onClick={handleClickSidebar}>
                  <ClearAll />
                </button>
              </div>
              <div>
                <img src={logo} alt="logo" className="w-28"/>
              </div>
              <div className="hidden md:flex items-center text-white space-x-1 font-bold">
                <Link to="/user/beranda" className="px-3 hover:text-gray-500">Beranda</Link>
                <Link to="#artikel" className="px-3 hover:text-gray-500">Artikel</Link>
              </div>
            </div>
            <div className="hidden md:flex items-center text-white">
              <Notifications style={{fontSize: 26 }}/>
              <AccountCircle className="ml-8" style={{fontSize: 36}}/>
              <KeyboardArrowDownSharp style={{fontSize: 30}}/>
            </div>
            <div className="md:hidden flex items-center">
              <button className="focus:outline-none text-white" onClick={handleClickMenu}>
                <Dehaze />
              </button>  
            </div>
          </div>
        </div>  
        {/* Mobile navbar */}
        {isMenuShow ? 
          <div className="mt-4 md:hidden text-white">
              <Link to="/beranda" className="block px-3 py-2 hover:text-gray-500">Beranda</Link>
              <Link to="#artikel" className="block px-3 py-2 hover:text-gray-500">Artikel</Link>
          </div>
          : null
        }
        
      </nav>
      {/* Sidebar */}
      {isSidebarShow ?
        <Sidebar visibility="md:hidden flex"/>
        : null
      }
      
    </>
  )
}


export default Header