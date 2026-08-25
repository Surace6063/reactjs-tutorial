import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import ProductCard from "../components/ProductCard"

const Products = () => {
  const {data:products,isLoading,error} = useQuery({
     queryKey: ["products"],
     queryFn: async () => {
      const response = await axios.get("https://fakestoreapi.com/products")
      return response.data
     }
  })

  if(isLoading) return <p>loading...</p>
  if(error) return <p>{error}</p>

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       {
         products?.map(item => (
            <ProductCard key={item.id} item={item} />
        ))
       }
     </div>
  )
}
export default Products