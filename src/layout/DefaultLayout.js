import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const DefaultLayout = ({children}) => {
  
  return (
    <>
      <div className="w-full bg-gray-200">
        <Header />
        <div className="flex">
          <div className="flex-shrink-0">
            <Sidebar visibility="hidden"/>
          </div>
          <div className="flex-1">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default DefaultLayout