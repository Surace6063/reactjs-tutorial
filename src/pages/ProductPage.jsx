import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

const ProductPage = () => {
    const [products,setProducts] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState(null)

  useEffect(() => {
    // function to fetch api
    const getProducts = async () => {
      setError(null)
      setIsLoading(true)
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        )
        console.log(response.data)
        setProducts(response.data)
        setIsLoading(false)  // setting isLoading to false after getting data
      } catch (error) {
        console.log(error)
        setError(error?.response?.message || "Error fetching data!")
        setIsLoading(false)
      }
    }
    getProducts()
  }, [])

  if(isLoading) return <p>loading...</p>
  if(error) return <p>{error}</p>

  return(
     <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       {
        products?.slice(0,10)?.map(item => (
            <ProductCard key={item.id} item={item} />
        ))
       }
     </div>
  )
}
export default ProductPage
