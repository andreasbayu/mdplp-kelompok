import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { Redirect } from 'react-router-dom'
import { getToken } from '../action/auth'

const DefaultLayout = ({ children }) => {
  
  const token = getToken()

  if (token === null) return <Redirect to='/login' />

  return (
    <>
      <div className="w-full bg-gray-200">
        <Header />
        <div className="flex">
          <div className="flex-shrink-0">
            <Sidebar visibility="hidden"/>
          </div>
          <div className="flex-1">
            { children }
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default DefaultLayout