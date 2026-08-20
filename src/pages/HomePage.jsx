import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div className="mt-4 px-4 flex flex-col gap-4">
      <Link to="/product/101">
         <div className="border border-gray-500 w-60 p-4 rounded-md shadow-md">
          Name: Iphone 17 pro max
        </div>
      </Link>

      <Link to="/product/102">
         <div className="border border-gray-500 w-60 p-4 rounded-md shadow-md">
        Name: Iphone 16 pro max
      </div>
      </Link>

      <Link to="/product/103">
        <div className="border border-gray-500 w-60 p-4 rounded-md shadow-md">
        Name: Iphone 15 pro max
      </div>
      </Link>
    </div>
  )
}
export default HomePage