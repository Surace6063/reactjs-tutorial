import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="shadow p-4 rounded-md">
        <img
          src={item.image}
          alt={item.title}
          className="rounded-md mb-2 aspect-square object-contain"
        />

        <h3 className="text-lg font-semibold text-gray-700 truncate">
          {item.title}
        </h3>

        <p className="mt-1 text-xl font-bold text-pink-700">${item.price}</p>
        <button className="btn w-full mt-2 flex gap-2 items-center justify-center">
          Add to cart <ShoppingCart size={20} />
        </button>
      </div>
    </Link>
  );
};
export default ProductCard;
