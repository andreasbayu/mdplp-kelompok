const Card = (props) => {

  const bgTingkatKesulitan = (kesulitan) => {
    if (kesulitan === "sulit" || kesulitan === "sukar") return "bg-red-500"
    if (kesulitan === "sedang") return "bg-yellow-600"
    if (kesulitan === "mudah") return "bg-green-500"
    return ""
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div>
        <img className="object-cover md:w-full md:h-36 w-full h-40" src={props.image} alt="cover"/>
        <div className="absolute -mt-10">
          <div
            className={"text-white bg-opacity-60 px-4 rounded " + 
            bgTingkatKesulitan(props.difficulty) }
            >
              {props.difficulty}
          </div>
        </div>
      </div>
      <div className="p-6 pt-8">
        <div className="uppercase tracking-wide text-md font-semibold">
          {props.title}
        </div>
        <div className="text-gray-600 text-md">
          {props.name}
        </div>
        <div className="text-gray-600">
          {props.total_question} Soal
        </div>
      </div>
    </div>
  )
}

export default Card