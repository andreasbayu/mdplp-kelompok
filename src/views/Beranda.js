import { useEffect } from 'react'
import cover from '../python.jpg'
import Card from './beranda/Card'

const Beranda = () => {

  const data = {
    kategori: "Programming",
    sampleData: 
    [
      {
        title: "Python Untuk Pemula",
        image: cover,
        total_question: "10",
        name: "Yulianto Bayu",
        difficulty: "mudah"
      },
      {
        title: "Html Untuk Pemula",
        image: cover,
        total_question: "10",
        name: "Yulianto Bayu",
        difficulty: "mudah"
      },
      {
        title: "Javascript Untuk Pemula",
        image: cover,
        total_question: "10",
        name: "Yulianto Bayu",
        difficulty: "sulit"
      },
      {
        title: "Java Untuk Pemula",
        image: cover,
        total_question: "10",
        name: "Yulianto Bayu",
        difficulty: "sedang"
      },
    ]  
  }
  
  useEffect(() =>{
    const cariSoal = document.getElementById("carisoal")
    cariSoal.addEventListener('keypress', () => {
      
    })
  })

  return (
    <>
      <div className="container mx-auto md:h-full ">
        <div className="row mx-auto mt-28">
          <div className="text-4xl text-center px-4 font-semibold ">Selamat datang, $NAMA</div>
        </div>
        <div className="row md:w-1/2 w-5/6 mx-auto mt-28">
          <input type="search" id="carisoal"
            className="shadow border-2 rounded w-full py-5 px-4 text-gray-700 focus:outline-none leading-tight focus:border-blue-800"
            placeholder="Cari soal.."/>
        </div>
        {/* quiz */}
        <div className="flex flex-col md:p-0 p-4 mt-28">
          <div className="row">
            <div className="text-xl font-bold mb-5">{data.kategori}</div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-2 md:mx-0">
              {/* Loop */}
              {
                data.sampleData.map((res, idx) => (
                  <Card key={idx}{...res}/>
                ))
              }
            </div>
          </div>
        </div>           
      </div>
    </>
  )
}

export default Beranda