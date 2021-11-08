import {
  AddToPhotos,
  Assessment,
  ExitToApp
} from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { logout } from '../action/auth'

const Sidebar = (props) => {
  
  return (
    <>
      <div className={"transition-transform absolute md:relative z-10 md:z-0 md:opacity-100 bg-opacity-95 flex flex-col bg-gray-800 h-screen w-full md:w-52 md:flex " + props.visibility}>
        <div className="flex flex-col mt-10">
          <Link to="/user/buatsoal#"
            className="p-2 text-white hover:text-blue-800 bg-gray-600 my-2 mx-3 hover:bg-gray-50 rounded-md bg-opacity-50">
              <AddToPhotos/> Buat Soal
          </Link>
          <Link to="/user/statistik"
            className="p-2 text-white hover:text-blue-800 bg-gray-600 my-2 mx-3 hover:bg-gray-50 rounded-md bg-opacity-50">
              <Assessment/> Statistik
          </Link>
          <Link to="/" onClick={logout}
            className="p-2 text-white hover:text-blue-800 bg-gray-600 my-2 mx-3 hover:bg-gray-50 rounded-md bg-opacity-50">
              <ExitToApp /> Logout
          </Link>
        </div>
        
      </div>
    </>
  )
}

export default Sidebar
