import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'

const Footer = () => {
  return (
    <>
      <div className="w-full">
        <div className="py-4 grid justify-items-center bg-white">
          <div className="flex flex-row">
            <img src={instagram} alt="twitter-logo" width="30" className="mx-2"/>
            <img src={facebook} alt="facebook-logo" width="30" className="mx-2"/>
            <img src={twitter} alt="instagram-logo" width="30" className="mx-2"/>
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