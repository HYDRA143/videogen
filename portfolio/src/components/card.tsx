import Navbar from './navbar'
import Content from './content'

const Card = () => {
  return (
    <div className="min-h-screen w-full bg-gray-600 m-0 p-0 flex flex-col">
      <div className="bg-[#96f029] px-6 py-2 rounded-md">
        <Navbar />
      </div>

      <div className="">
        <Content />
      </div>

    </div>
  )
}

export default Card