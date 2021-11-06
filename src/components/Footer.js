import logo from '../logo.svg'

const Footer = () => {
  return (
    <>
      <div className="w-full">
        <div className="py-4 grid justify-items-center bg-white">
          <div className="flex flex-row">
            <img src={logo} alt="twitter-logo" width="60"/>
            <img src={logo} alt="facebook-logo" width="60"/>
            <img src={logo} alt="instagram-logo" width="60"/>
          </div>
          <div className="mt-4">
            Artikel | Kontak | Tentang Kami
          </div>
        </div>
        <div className="bg-blue-800">
          <div className="text-center text-white items-center py-2">© Testoo - All Right Reserved</div>
        </div>
      </div>
    </>
  )
}

export default Footer