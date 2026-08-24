import { ShoppingCart } from 'lucide-react'

const ProductCard = ({item}) => {
  return (
    <div className="">
      <img src={item.images[0]} alt={item.title} className="rounded-md shadow-md mb-2"  />

       <h3 className="text-lg font-semibold text-gray-700 truncate">
        {item.title}
       </h3>

       <p className="mt-1 text-xl font-bold text-pink-700">
        ${item.price}
      </p>
      <button className="btn w-full mt-2 flex gap-2 items-center justify-center">
        Add to cart  <ShoppingCart size={20} />
      </button>
    </div>
  )
}
export default ProductCard