import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

const SingleProductPage = () => {
    // accessing id from url
    const {id} = useParams()

    const [product,setProduct] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState(null)

     useEffect(() => {
    // function to fetch api
    const getProducts = async () => {
      setError(null)
      setIsLoading(true)
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        )
        console.log(response.data)
        setProduct(response.data)
        setIsLoading(false)  // setting isLoading to false after getting data
      } catch (error) {
        console.log(error)
        setError(error?.response?.message || "Error fetching data!")
        setIsLoading(false)
      }
    }
    getProducts()
  }, [id])

  if(isLoading) return <p>loading...</p>
  if(error) return <p>{error}</p>

  return (
  <div className="min-h-screen max-w-7xl mx-auto bg-gray-50 px-6 py-12">
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-12 rounded-2xl bg-white p-8 shadow-sm md:grid-cols-2">
        
        {/* Product Image */}
        <div className="flex min-h-[550px] items-center justify-center rounded-xl bg-gray-50 p-8">
          <img
            src={product?.image}
            alt={product?.title}
            className="max-h-[500px] w-full object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">

          {/* Category */}
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
            {product?.category}
          </p>

          {/* Title */}
          <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
            {product?.title}
          </h1>

          {/* Rating */}
          <div className="mt-5 flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-xl text-yellow-500">★</span>
              <span className="font-semibold text-gray-900">
                {product?.rating?.rate}
              </span>
            </div>

            <span className="text-sm text-gray-500">
               {product?.rating?.count} reviews
            </span>
          </div>

          {/* Price */}
          <div className="mt-6">
            <span className="text-3xl font-bold text-gray-900">
              ${product?.price}
            </span>
          </div>

          {/* Divider */}
          <div className="my-7 h-px bg-gray-200" />

          {/* Description */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-gray-900">
              Description
            </h2>

            <p className="text-base leading-7 text-gray-600">
             {product?.description}
            </p>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <p className="mb-3 text-sm font-semibold text-gray-900">
              Quantity
            </p>

            <div className="flex w-fit items-center rounded-lg border border-gray-300">
              <button className="px-4 py-2 text-xl text-gray-600 hover:bg-gray-100">
                −
              </button>

              <span className="border-x border-gray-300 px-6 py-2 font-medium">
                1
              </span>

              <button className="px-4 py-2 text-xl text-gray-600 hover:bg-gray-100">
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="flex-1 rounded-lg border border-gray-900 px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-100">
              Add to Cart
            </button>

            <button className="flex-1 rounded-lg bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800">
              Buy Now
            </button>
          </div>

          {/* Features */}
          <div className="mt-8 grid grid-cols-3 gap-4 border-t pt-6">
            <div>
              <p className="text-sm font-semibold text-gray-900">
                Free Shipping
              </p>
              <p className="mt-1 text-xs text-gray-500">
                On orders over $50
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-900">
                Easy Returns
              </p>
              <p className="mt-1 text-xs text-gray-500">
                30 day returns
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-900">
                Secure Payment
              </p>
              <p className="mt-1 text-xs text-gray-500">
                100% secure checkout
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
)
}
export default SingleProductPage


