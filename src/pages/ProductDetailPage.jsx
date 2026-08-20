import { useParams } from "react-router-dom"

const ProductDetailPage = () => {
    // accessing id from url
    const {id} = useParams()

  return (
    <div>ProductDetailPage: {id}</div>
  )
}
export default ProductDetailPage